/**
 * Script de validação manual dos fluxos de navegação da aplicação Quiz.
 * Executa: node e2e-flow-test.mjs
 * Requer: servidor rodando em http://localhost:5173
 */
import { chromium } from 'playwright';

const BASE_URL = 'http://localhost:5173';
const results = { passed: [], failed: [], visualNotes: [] };

function pass(msg) {
  results.passed.push(msg);
  console.log(`[OK] ${msg}`);
}

function fail(msg, detail = '') {
  results.failed.push({ msg, detail });
  console.log(`[FALHA] ${msg}${detail ? ` - ${detail}` : ''}`);
}

function note(msg) {
  results.visualNotes.push(msg);
  console.log(`[NOTA] ${msg}`);
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // Capturar erros do console
  const consoleErrors = [];
  page.on('console', (msg) => {
    const type = msg.type();
    const text = msg.text();
    if (type === 'error') {
      consoleErrors.push(text);
    }
  });

  try {
    // 1. Navegar até a aplicação
    await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: 10000 });
    pass('Navegação até http://localhost:5173 concluída');

    // 2. Tela Welcome - verificar título e visual
    const welcomeTitle = await page.locator('h1').first().textContent();
    const welcomeSubtitle = await page.locator('h2').first().textContent();
    if (welcomeTitle && welcomeTitle.includes('Encontro')) {
      pass(`Tela Welcome: título principal encontrado ("${welcomeTitle.trim()}")`);
    } else {
      fail('Tela Welcome: título principal esperado não encontrado', `encontrado: ${welcomeTitle}`);
    }

    const hasPixelArtCss = await page.evaluate(() => {
      const el = document.querySelector('.welcomeContainer');
      if (!el) return false;
      const style = getComputedStyle(el);
      return style.background.includes('gradient') || style.backgroundColor;
    });
    if (hasPixelArtCss) {
      note('Tela Welcome: layout com gradiente/fundo escuro (tema pixel art)');
    }

    const startBtn = page.locator('button:has-text("INICIAR")');
    if (await startBtn.isVisible()) {
      pass('Tela Welcome: botão "INICIAR QUIZ" encontrado');
    } else {
      fail('Tela Welcome: botão "INICIAR QUIZ" não encontrado');
    }

    // 3. Clicar no botão para ir à Home
    await startBtn.click();
    await page.waitForTimeout(500);

    // 4. Home - verificar seleção de quiz e botão de desafios
    const homeTitle = await page.locator('h1').first().textContent();
    if (homeTitle && homeTitle.includes('Encontro')) {
      pass('Tela Home: título encontrado');
    }

    const hasCategorySection = await page.locator('text=Selecione a Categoria').isVisible();
    const hasLevelSection = await page.locator('text=Selecione o Nível').isVisible();
    if (hasCategorySection && hasLevelSection) {
      pass('Tela Home: seções de quiz (Categoria e Nível) presentes');
    } else {
      fail('Tela Home: seções de quiz incompletas', `Categoria: ${hasCategorySection}, Nível: ${hasLevelSection}`);
    }

    const challengeBtn = page.locator('button:has-text("Modo Desafios")');
    if (await challengeBtn.isVisible()) {
      pass('Tela Home: botão "Ir para Modo Desafios" encontrado');
    } else {
      fail('Tela Home: botão de Modo Desafios não encontrado');
    }

    // Verificar que não há seção mista de desafios no meio da seleção de quiz
    const challengeSectionCount = await page.locator('h2:has-text("Desafio")').count();
    if (challengeSectionCount === 0) {
      pass('Tela Home: sem seção "Modo Desafios" misturada na seleção de quiz');
    } else {
      note('Tela Home: possível mistura de seções de desafios');
    }

    // 5. Ir para ChallengeSelection
    await challengeBtn.click();
    await page.waitForTimeout(500);

    const challengeSelectionTitle = await page.locator('h1').first().textContent();
    if (challengeSelectionTitle && challengeSelectionTitle.includes('Modo Desafios')) {
      pass('ChallengeSelection: título "Modo Desafios" encontrado');
    } else {
      fail('ChallengeSelection: título esperado não encontrado', `encontrado: ${challengeSelectionTitle}`);
    }

    const emojiBtn = page.locator('button:has-text("Desafios da Bíblia em Emoji")');
    const hinosBtn = page.locator('button:has-text("Desafios de Hinos")');
    const backBtn = page.locator('button:has-text("Voltar para Home")');

    if (await emojiBtn.isVisible()) pass('ChallengeSelection: botão Emoji encontrado');
    else fail('ChallengeSelection: botão Emoji não encontrado');
    if (await hinosBtn.isVisible()) pass('ChallengeSelection: botão Hinos encontrado');
    else fail('ChallengeSelection: botão Hinos não encontrado');
    if (await backBtn.isVisible()) pass('ChallengeSelection: botão Voltar encontrado');
    else fail('ChallengeSelection: botão Voltar não encontrado');

    // 6. Fluxo Emoji: clicar em Emoji
    await emojiBtn.click();
    await page.waitForTimeout(500);

    const emojiContainer = page.locator('span:has-text("Emoji Bíblia")');
    const challengePrompt = page.locator('.promptEmoji, .promptText');
    if (await emojiContainer.isVisible() || await challengePrompt.isVisible()) {
      pass('ChallengeContainer (Emoji): tela de desafio carregada');
    } else {
      fail('ChallengeContainer (Emoji): tela não carregou corretamente');
    }

    const exitBtn = page.locator('button:has-text("Sair")');
    if (await exitBtn.isVisible()) {
      pass('ChallengeContainer: botão Sair encontrado');
      await exitBtn.click();
      await page.waitForTimeout(500);
    } else {
      fail('ChallengeContainer: botão Sair não encontrado');
    }

    // O exit atual vai para welcome, não para ChallengeSelection. Verificar fluxo.
    const afterExit = await page.locator('h1').first().textContent();
    if (afterExit && afterExit.includes('Encontro')) {
      note('Após Sair: voltou para Welcome (comportamento conforme App.tsx handleExitChallenge)');
    }

    // 7. Ir novamente para ChallengeSelection e testar Hinos
    await page.locator('button:has-text("INICIAR")').click();
    await page.waitForTimeout(300);
    await page.locator('button:has-text("Modo Desafios")').click();
    await page.waitForTimeout(300);
    await hinosBtn.click();
    await page.waitForTimeout(500);

    const hinosBadge = page.locator('span:has-text("Hinos")');
    if (await hinosBadge.isVisible()) {
      pass('ChallengeContainer (Hinos): tela de desafio de hinos carregada');
    } else {
      fail('ChallengeContainer (Hinos): tela não carregou corretamente');
    }

    await page.locator('button:has-text("Sair")').click();
    await page.waitForTimeout(300);

    // 8. Fluxo Quiz normal: Home -> selecionar categoria + nível -> iniciar
    await page.locator('button:has-text("INICIAR")').click();
    await page.waitForTimeout(300);

    await page.locator('button:has-text("Bíblia")').first().click();
    await page.waitForTimeout(150);
    await page.locator('button:has-text("Fácil")').first().click();
    await page.waitForTimeout(150);

    const startQuizBtn = page.locator('button:has-text("Iniciar Quiz")');
    await startQuizBtn.click();
    await page.waitForTimeout(500);

    const quizContainer = page.locator('.questionCard, .progressBar, [class*="Quiz"]');
    const hasQuestion = await page.locator('text=/pergunta|Pergunta|\\?/').first().isVisible().catch(() => false);
    if (await quizContainer.first().isVisible().catch(() => false) || hasQuestion) {
      pass('QuizContainer: quiz normal iniciado corretamente');
    } else {
      const body = await page.locator('body').textContent();
      if (body.includes('Nenhuma pergunta') || body.includes('pergunta')) {
        pass('QuizContainer: quiz aberto (pode ter mensagem de sem perguntas)');
      } else {
        fail('QuizContainer: quiz não abriu corretamente');
      }
    }

    // Verificar erros do console
    if (consoleErrors.length > 0) {
      fail('Erros no console durante os testes', consoleErrors.join('; '));
    }
  } catch (err) {
    fail('Erro durante execução', err.message);
  } finally {
    await browser.close();
  }

  // Resumo final
  console.log('\n========== RESUMO ==========');
  console.log(`Passou: ${results.passed.length}`);
  console.log(`Falhou: ${results.failed.length}`);
  console.log(`Notas visuais: ${results.visualNotes.length}`);
  if (results.failed.length > 0) {
    console.log('\nProblemas encontrados:');
    results.failed.forEach((f) => console.log(`  - ${f.msg}${f.detail ? ` (${f.detail})` : ''}`));
  }
  process.exit(results.failed.length > 0 ? 1 : 0);
}

main();
