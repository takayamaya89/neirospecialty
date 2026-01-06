import { NeonButton } from "@/components/NeonButton";
import { NeonCard } from "@/components/NeonCard";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { StatusBadge } from "@/components/StatusBadge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

export default function Home() {
  const [openAccordion, setOpenAccordion] = useState<string>("");

  return (
    <div className="min-h-screen animated-bg relative">
      <AnimatedBackground />
      {/* БЛОК 1: HERO */}
      <section className="container py-12 md:py-20 lg:py-28 relative z-10">
        <div className="text-center space-y-6 md:space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            НЕЙРО СПЕЦИАЛИЗАЦИИ
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            глубокие профессиональные навыки для высокого дохода
          </p>
          <p className="text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
            Прокачай одну ключевую профессию на ИИ и выйди на чеки от 50 000–150 000 ₽ за
            проекты без офлайна, таргета и бесконечных марафонов.
          </p>
          <p className="text-sm md:text-base text-muted-foreground max-w-4xl mx-auto">
            10 000+ учеников прошли NEIROMASTER и уже используют ИИ в работе. Теперь
            следующий шаг — узкая специализация под высокий доход и сложные проекты.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <NeonButton variant="primary" className="text-sm md:text-base px-6 py-6">
              Выбрать специализацию
            </NeonButton>
            <NeonButton variant="secondary" className="text-sm md:text-base px-6 py-6">
              Помочь выбрать направление
            </NeonButton>
          </div>
        </div>
      </section>

      {/* БЛОК 2: КОГДА ВЫБИРАТЬ СПЕЦИАЛИЗАЦИЮ */}
      <section className="container py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
          <NeonCard glow="pink" className="p-6 md:p-8">
            <h3 className="font-semibold mb-2">ХОРОШО ВЛАДЕЕШЬ НЕЙРОСЕТЯМИ НА БАЗОВОМ УРОВНЕ</h3>
          </NeonCard>
          <NeonCard glow="purple" className="p-6 md:p-8">
            <h3 className="font-semibold mb-2">ХОЧЕШЬ УВЕЛИЧИТЬ ДОХОД МАСШТАБНО</h3>
          </NeonCard>
          <NeonCard glow="cyan" className="p-6 md:p-8">
            <h3 className="font-semibold mb-2">ГОТОВ БРАТЬ БОЛЬШИЕ И СЛОЖНЫЕ ПРОЕКТЫ</h3>
          </NeonCard>
          <NeonCard glow="pink" className="p-6 md:p-8">
            <h3 className="font-semibold mb-2">ХОЧЕШЬ НОВУЮ ПРОФЕССИЮ С НОВЫМИ МОЩНЫМИ НАВЫКАМИ</h3>
          </NeonCard>
        </div>
        <p className="text-center max-w-4xl mx-auto leading-relaxed">
          Специализация — следующий шаг после базового владения ИИ: ты собираешь не
          «разрозненные навыки», а цельную профессию, с которой можно выходить к клиентам, в
          агентства и строить свои продукты.
        </p>
      </section>

      {/* БЛОК 3: КАК ВЫБРАТЬ СВОЮ СПЕЦИАЛИЗАЦИЮ */}
      <section className="container py-12 md:py-16 relative z-10">
        <h2 className="text-center mb-6 md:mb-8">Какую специализацию взять ИМЕННО тебе</h2>
        <p className="text-center mb-8 md:mb-12 text-muted-foreground">
          Выбери, откуда ты идёшь — и посмотри, какая нейропрофессия даст самый быстрый рост
          дохода.
        </p>
        
        <div className="space-y-4 md:space-y-6 max-w-5xl mx-auto mb-8">
          <NeonCard glow="pink" className="p-6 md:p-8">
            <p className="mb-3">
              <strong>Если ты уже прошёл NEIROMASTER и хочешь масштабировать доход на запусках
              и воронках</strong>
            </p>
            <p className="text-primary">
              → Тебе нужна специализация «ПРОДАЖИ И ЗАПУСКИ С ИИ».
            </p>
          </NeonCard>

          <NeonCard glow="purple" className="p-6 md:p-8">
            <p className="mb-3">
              <strong>Если тебе важна визуалка, контент, бренды и UGC, хочешь портфолио, которое
              покупают</strong>
            </p>
            <p className="text-secondary">
              → Тебе нужна специализация «AI-КРЕАТОР: ФОТО, ВИДЕО, ЗВУК».
            </p>
          </NeonCard>

          <NeonCard glow="cyan" className="p-6 md:p-8">
            <p className="mb-3">
              <strong>Если хочешь самые высокие чеки, технику, ботов и автоматизацию процессов
              под бизнес</strong>
            </p>
            <p className="text-accent">
              → Тебе нужна специализация «БОТЫ, АВТОМАТИЗАЦИЯ И ВАЙБ-КОДИНГ».
            </p>
          </NeonCard>
        </div>

        <div className="text-center">
          <NeonButton variant="accent" className="text-sm md:text-base px-6 py-6">
            Ответить на 3 вопроса и получить рекомендацию
          </NeonButton>
        </div>
      </section>

      {/* БЛОК 4: ФОРМАТ СПЕЦИАЛИЗАЦИЙ */}
      <section className="container py-12 md:py-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="mb-4">ЕСТЬ три специализации.</h2>
          <h2 className="mb-4">КАЖДАЯ под конкретные задачи.</h2>
          <div className="inline-block">
            <NeonCard glow="purple" className="p-6 md:p-8">
              <h3 className="mb-2">📅 ПРОХОДЯТ ПОТОКАМИ</h3>
              <p className="text-muted-foreground">Старт — раз в 1–1,5 месяца</p>
            </NeonCard>
          </div>
          <p className="leading-relaxed pt-4">
            Формат — групповое наставничество: мини-группа, живые созвоны, разборы и
            постоянная поддержка куратора и автора курса. Ты не просто смотришь уроки — ты
            собираешь рабочие проекты под себя и клиентов.
          </p>
        </div>
      </section>

      {/* БЛОК 5: СПЕЦИАЛИЗАЦИИ (аккордеон) */}
      <section className="container py-12 md:py-16 relative z-10">
        <Accordion type="single" collapsible value={openAccordion} onValueChange={setOpenAccordion}>
          {/* СПЕЦИАЛИЗАЦИЯ 1 */}
          <AccordionItem value="spec-1" className="border-primary/30 mb-6">
            <NeonCard glow="pink" className="overflow-hidden">
              <AccordionTrigger className="px-6 md:px-8 py-6 hover:no-underline">
                <div className="text-left w-full space-y-3">
                  <StatusBadge variant="pink">Формируется группа</StatusBadge>
                  <h2 className="mb-2">ПРОДАЖИ И ЗАПУСКИ С ИИ</h2>
                  <p className="text-base md:text-lg text-muted-foreground font-normal">
                    Авторская система «Хакер Роста. Нейроверсия»
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 md:px-8 pb-6">
                <div className="space-y-6">
                  {/* Блок результата */}
                  <div className="bg-background/50 p-6 rounded-lg">
                    <h3 className="mb-4">После специализации ты:</h3>
                    <ul className="space-y-3 list-disc list-inside">
                      <li>Собираешь воронки, прогревы и запуски под экспертов и проекты с чеком от 50 000–150 000 ₽ за цикл.</li>
                      <li>Понимаешь, как делать запуски без дорогого трафика — через контент, ИИ и системную прогревочную стратегию.</li>
                      <li>Можешь работать как независимый маркетолог, продюсер или усиливать свои собственные проекты.</li>
                    </ul>
                  </div>

                  {/* Статус и цена */}
                  <div className="bg-secondary/10 p-6 rounded-lg border border-secondary/30">
                    <p className="text-secondary font-semibold mb-4">
                      СТАТУС: Формируется группа: оставь заявку, чтобы попасть в следующий поток
                    </p>
                    <p className="text-5xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">54 900 ₽</p>
                    <p className="text-sm text-muted-foreground">
                      Количество мест в потоке ограничено. Возможна оплата частями.
                    </p>
                  </div>

                  {/* Кнопки */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <NeonButton variant="primary" className="flex-1">
                      Оставить заявку
                    </NeonButton>
                    <NeonButton variant="secondary" className="flex-1">
                      Узнать подробности
                    </NeonButton>
                  </div>

                  {/* Программа */}
                  <Accordion type="single" collapsible>
                    <AccordionItem value="program-1" className="border-border">
                      <AccordionTrigger className="text-lg font-semibold">
                        Подробнее о программе ▼
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-6 pt-4">
                          <div>
                            <h4 className="font-semibold mb-3">Вы научитесь:</h4>
                            <ul className="space-y-2 list-disc list-inside">
                              <li>Делать JTBD-анализ через ИИ — быстро, глубоко, профессионально</li>
                              <li>Создавать Big Idea, которая цепляет аудиторию и выделяет проект</li>
                              <li>Собирать контент-матрицы и прогревы, которые ведут к продаже</li>
                              <li>Создавать триггерные хуки (40+ формул), которые попадают в эмоцию</li>
                              <li>Строить нейроворонки, которые работают на разных сегментах аудитории</li>
                              <li>Планировать запуски (Instant, Flash, Warm) + писать сценарии</li>
                              <li>ПРИВЛЕКАТЬ ПОДПИСЧИКОВ БЕЗ ТАРГЕТА И РЕКЛАМЫ</li>
                              <li>НАРАЩИВАТЬ АУДИТОРИЮ ВО ВСЕХ СОЦИАЛЬНЫХ СЕТЯХ</li>
                              <li>СОЗДАВАТЬ СОБСТВЕННЫЕ ПРОДУКТЫ</li>
                              <li>Работать с клиентами: ТЗ, коммуникации, стратегия, финальный результат</li>
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3">💰 КОММЕРЧЕСКАЯ ЦЕННОСТЬ</h4>
                            <ul className="space-y-2">
                              <li>Маркетинговые воронки — от 195 до 780 долларов</li>
                              <li>JTBD-анализы — от 65 до 390 долларов</li>
                              <li>Прогревы и контент — от 130 до 650 долларов</li>
                              <li>Запуски под ключ — от 650 до 3 250 долларов</li>
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3">📁 ПОРТФОЛИО</h4>
                            <ul className="space-y-2">
                              <li>Маркетинговая воронка</li>
                              <li>Big Idea</li>
                              <li>Контент-линейка</li>
                              <li>Лид-магнит</li>
                              <li>Прогрев</li>
                              <li>Кейс клиента</li>
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </AccordionContent>
            </NeonCard>
          </AccordionItem>

          {/* СПЕЦИАЛИЗАЦИЯ 2 */}
          <AccordionItem value="spec-2" className="border-secondary/30 mb-6">
            <NeonCard glow="purple" className="overflow-hidden">
              <AccordionTrigger className="px-6 md:px-8 py-6 hover:no-underline">
                <div className="text-left w-full space-y-3">
                  <StatusBadge variant="purple">Формируется группа</StatusBadge>
                  <h2 className="mb-2">AI-КРЕАТОР: ФОТО, ВИДЕО, ЗВУК</h2>
                  <p className="text-base md:text-lg text-muted-foreground font-normal">
                    Самая ЯРКАЯ профессия 2026
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 md:px-8 pb-6">
                <div className="space-y-6">
                  {/* Блок результата */}
                  <div className="bg-background/50 p-6 rounded-lg">
                    <h3 className="mb-4">После специализации ты:</h3>
                    <ul className="space-y-3 list-disc list-inside">
                      <li>Собираешь коммерческое AI-портфолио под бренды, экспертов и продукты: фото, видео, звук.</li>
                      <li>Можешь брать UGC-заказы, делать рекламные ролики и бренд-пакеты, выходя на стабильные заказы каждый месяц.</li>
                      <li>Превращаешь свои визуальные навыки и ИИ-инструменты в понятный доход, а не просто «красивые картинки».</li>
                    </ul>
                  </div>

                  {/* Статус и цена */}
                  <div className="bg-secondary/10 p-6 rounded-lg border border-secondary/30">
                    <p className="text-secondary font-semibold mb-4">
                      СТАТУС: Формируется группа: оставь заявку, чтобы попасть в следующий поток
                    </p>
                    <p className="text-5xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">39 900 ₽</p>
                    <p className="text-sm text-muted-foreground">
                      Возможна поэтапная оплата. Количество мест в потоке ограничено.
                    </p>
                  </div>

                  {/* Кнопки */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <NeonButton variant="primary" className="flex-1">
                      Оставить заявку
                    </NeonButton>
                    <NeonButton variant="secondary" className="flex-1">
                      Узнать подробности
                    </NeonButton>
                  </div>

                  {/* Программа */}
                  <Accordion type="single" collapsible>
                    <AccordionItem value="program-2" className="border-border">
                      <AccordionTrigger className="text-lg font-semibold">
                        Подробнее о программе ▼
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-6 pt-4">
                          <div>
                            <h4 className="font-semibold mb-3">Вы научитесь:</h4>
                            <ul className="space-y-2 list-disc list-inside">
                              <li>Создавать уникальный визуальный код бренда</li>
                              <li>Делать AI-фотосессии (20–30 кадров): lifestyle, fashion, предметка, портреты</li>
                              <li>Создавать UGC-контент, который покупают бренды: обзоры, анбоксинги, product-stories</li>
                              <li>Делать рекламные видео уровня агентств через Veo3, Runway, Kling</li>
                              <li>Делать экспертный монтаж под тренды: быстрые сцены, эффектные переходы, CGI-эффекты</li>
                              <li>Создавать звук, озвучку и музыку через Suno и ElevenLabs</li>
                              <li>СОЗДАВАТЬ КЛИПЫ</li>
                              <li>РАБОТАТЬ С ПРОДУКТОВЫМИ КРЕАТИВАМИ</li>
                              <li>Собирать полноценные бренд-паки под коммерческие задачи</li>
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3">💰 КОММЕРЧЕСКАЯ ЦЕННОСТЬ (USD)</h4>
                            <ul className="space-y-2">
                              <li>UGC-видео — от 26 до 130 долларов за ролик</li>
                              <li>AI-видео — от 52 до 325 долларов</li>
                              <li>Бренд-пак — от 130 до 390 долларов</li>
                              <li>Фотосеты — от 39 до 260 долларов</li>
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3">📁 ПОРТФОЛИО</h4>
                            <ul className="space-y-2">
                              <li>Бренд-пак</li>
                              <li>2 коммерческих комплекта</li>
                              <li>Фото-сеты</li>
                              <li>Рекламные ролики</li>
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </AccordionContent>
            </NeonCard>
          </AccordionItem>

          {/* СПЕЦИАЛИЗАЦИЯ 3 */}
          <AccordionItem value="spec-3" className="border-accent/30 mb-6">
            <NeonCard glow="cyan" className="overflow-hidden">
              <AccordionTrigger className="px-6 md:px-8 py-6 hover:no-underline">
                <div className="text-left w-full space-y-3">
                  <StatusBadge variant="cyan">Формируется группа</StatusBadge>
                  <h2 className="mb-2">БОТЫ, АВТОМАТИЗАЦИЯ И ВАЙБ-КОДИНГ</h2>
                  <p className="text-base md:text-lg text-muted-foreground font-normal">
                    Самая технологичная и самая высокооплачиваемая профессия
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 md:px-8 pb-6">
                <div className="space-y-6">
                  {/* Блок результата */}
                  <div className="bg-background/50 p-6 rounded-lg">
                    <h3 className="mb-4">После специализации ты:</h3>
                    <ul className="space-y-3 list-disc list-inside">
                      <li>Собираешь продвинутых Telegram-ботов, интеграции и мини-сервисы, за которые платят от сотен до тысяч долларов.</li>
                      <li>Понимаешь, как встраивать ИИ-системы в бизнес-процессы и делать автоматизации «под ключ».</li>
                      <li>Можешь позиционироваться как специалист по ИИ-интеграциям и получать мало, но дорогих клиентов.</li>
                    </ul>
                  </div>

                  {/* Статус и цена */}
                  <div className="bg-accent/10 p-6 rounded-lg border border-accent/30">
                    <p className="text-accent font-semibold mb-4">
                      СТАТУС: Формируется группа: оставь заявку, чтобы попасть в следующий поток
                    </p>
                    <p className="text-5xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">64 900 ₽</p>
                    <p className="text-sm text-muted-foreground">
                      Возможна рассрочка. Количество мест ограничено технически — важен качественный разбор каждого проекта.
                    </p>
                  </div>

                  {/* Кнопки */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <NeonButton variant="primary" className="flex-1">
                      Оставить заявку
                    </NeonButton>
                    <NeonButton variant="secondary" className="flex-1">
                      Узнать подробности
                    </NeonButton>
                  </div>

                  {/* Программа */}
                  <Accordion type="single" collapsible>
                    <AccordionItem value="program-3" className="border-border">
                      <AccordionTrigger className="text-lg font-semibold">
                        Подробнее о программе ▼
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-6 pt-4">
                          <div>
                            <h4 className="font-semibold mb-3">Вы научитесь:</h4>
                            <ul className="space-y-2 list-disc list-inside">
                              <li>Проектировать архитектуру нейроворонок, которые продают</li>
                              <li>Создавать продвинутые Telegram-боты через ChatPlace/SendPulse</li>
                              <li>Подключать CRM, оплаты, webhooks, триггеры</li>
                              <li>Делать мини-софты, калькуляторы, генераторы на ИИ</li>
                              <li>Создавать подписочные продукты ( AI-боты)</li>
                              <li>СОЗДАВАТЬ КОММЕРЧЕСКИЕ АВТОМАТИЗАЦИИ ДЛЯ БИЗНЕСА</li>
                              <li>ВСТРАИВАТЬ В БИЗНЕС-ПРОЦЕССЫ СИСТЕМЫ НА ИИ</li>
                              <li>Строить устойчивую логику, которая не ломается под нагрузкой</li>
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3">💰 КОММЕРЧЕСКАЯ ЦЕННОСТЬ (USD)</h4>
                            <ul className="space-y-2">
                              <li>Боты — от 330 до 10910 долларов</li>
                              <li>Интеграции — от 560 до 5 040 долларов</li>
                              <li>Мини-сервисы — от 665 до 15020 долларов</li>
                              <li>Подписочные AI-продукты — пассивный доход</li>
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3">📁 ПОРТФОЛИО</h4>
                            <ul className="space-y-2">
                              <li>Продвинутый бот</li>
                              <li>Мини-софт</li>
                              <li>CRM-связка</li>
                              <li>AI-инструмент</li>
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </AccordionContent>
            </NeonCard>
          </AccordionItem>
        </Accordion>

        {/* ДОП.БЛОК ВНУТРИ СПЕЦИАЛИЗАЦИЙ */}
        <div className="mt-12 text-center max-w-4xl mx-auto space-y-6">
          <NeonCard glow="purple" className="p-8">
            <h3 className="mb-4">
              ФОРМАТ ОБУЧЕНИЯ — ГРУППОВОЕ НАСТАВНИЧЕСТВО, МЫ СОБИРАЕМ МИНИ ГРУППУ И ИДЕМ В ПРОЦЕСС ИЗУЧЕНИЯ МАТЕРИАЛА С КУРАТОРОМ И АВТОРОМ КУРСА
            </h3>
            <h3 className="mb-4">КАЖДЫЙ ПОЛУЧАЕТ КАЧЕСТВЕННЫЙ РЕЗУЛЬТАТ</h3>
            <p className="text-muted-foreground">
              Каждая специализация — это путь от «просто знаю нейросети» до конкретной профессии,
              с которой можно идти к клиентам и поднимать чек.
            </p>
          </NeonCard>
        </div>
      </section>

      {/* БЛОК 6: РЕЗУЛЬТАТЫ ВЫПУСКНИКОВ */}
      <section className="container py-12 md:py-16 relative z-10">
        <h2 className="text-center mb-8 md:mb-12">Что происходит после специализации</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          <NeonCard glow="pink" className="p-6 md:p-8">
            <p className="text-lg">
              «Маркетолог, 32 года: после спецухи по запускам собрала запуск на 450 000 ₽ без
              таргета — только за счёт воронки и ИИ-контента.»
            </p>
          </NeonCard>
          <NeonCard glow="purple" className="p-6 md:p-8">
            <p className="text-lg">
              «AI-креатор, 24 года: собрал портфолио из 4 проектов и вышел на стабильные 3–5
              UGC-заказов в месяц.»
            </p>
          </NeonCard>
          <NeonCard glow="cyan" className="p-6 md:p-8">
            <p className="text-lg">
              «Специалист по автоматизации: сделал 2 бота и мини-сервис под нишу, вышел на
              первые заказы от зарубежных клиентов.»
            </p>
          </NeonCard>
        </div>
        <p className="text-center mt-8 max-w-4xl mx-auto">
          Ты не просто «учишься ИИ» — ты собираешь портфолио и реальные проекты, которые
          можно показать клиенту и добавить в кейсы.
        </p>
      </section>

      {/* БЛОК 7: СПЕЦПРЕДЛОЖЕНИЕ */}
      <section className="container py-12 md:py-16 relative z-10">
        <NeonCard glow="pink" className="p-8 md:p-12 max-w-4xl mx-auto border-2">
          <h2 className="text-center mb-6">Я хочу NEIROMASTER и Специализацию!</h2>
          <p className="text-center text-lg mb-6">
            При покупке NEIROMASTER + специализация
            вы получаете скидку <span className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">15%</span> от общего чека
          </p>
          <div className="bg-background/50 p-6 rounded-lg mb-6">
            <p className="text-center">
              Например: «НЕЙРОМАСТЕР + любая специализация = от <span className="font-bold text-xl">50 000 ₽</span>. Скидка 15% — вы
              экономите более <span className="font-bold text-xl">10 000 ₽</span> и сразу выстраиваете путь: база ИИ → узкая профессия →
              высокий чек.»
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeonButton variant="primary" className="flex-1 sm:flex-none">
              Я хочу NEIROMASTER и Специализацию
            </NeonButton>
            <NeonButton variant="secondary" className="flex-1 sm:flex-none">
              Вернуться к NEIROMASTER
            </NeonButton>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Оставьте заявку, и куратор поможет выбрать специализацию под ваши задачи и текущий
            уровень.
          </p>
        </NeonCard>
      </section>

      {/* БЛОК 8: FAQ */}
      <section className="container py-12 md:py-16 relative z-10">
        <h2 className="text-center mb-8 md:mb-12">Частые вопросы</h2>
        <Accordion type="single" collapsible className="max-w-4xl mx-auto">
          <AccordionItem value="faq-1">
            <AccordionTrigger className="text-left">
              Подойдёт ли мне, если я не технарь?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Да, фокус на практику и готовые шаблоны, код писать не нужно
                (даже в автоматизации есть конструкторы).
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-2">
            <AccordionTrigger className="text-left">
              Сколько времени нужно в неделю?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                В среднем 5–7 часов в неделю: уроки, практика и обратная связь.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-3">
            <AccordionTrigger className="text-left">
              Что если я не успею/сорвусь по срокам?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Доступ к материалам остаётся, можно догонять в своём темпе, а проекты
                можно доделать с куратором.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-4">
            <AccordionTrigger className="text-left">
              Можно ли совмещать с работой/фрилансом?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Да, специализации собираются так, чтобы их можно было проходить
                параллельно с основной занятостью.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* ПОДВАЛ */}
      <footer className="container py-8 border-t border-border relative z-10">
        <div className="text-center space-y-2 text-sm text-muted-foreground">
          <p>ИП Галицкая М.В.</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="hover:text-primary transition-colors">
              Договор оферты
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
