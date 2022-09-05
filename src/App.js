import './styles/styles'
import BulletinBoard from './components/BulletinBoard.jsx';

const posts = [
  {
    question: 'Vad är tre fördelar med att använda React?',
    answers: [
      'När man bygger en applikation i React så använder man komponenter, som i sin tur använder komponenter vilket gör det lätt och smidigt att strukturera och överblicka sin kod, samt underlättar när man vill göra ändringar på webplatsen. Dessa komponenter kan återanvändas vilket gör att man slipper skriva massa onödig kod. ',
      'I React finns något som kallas för virtuell DOM, som är en slags kopia av DOM:en, som först beräknar vad som måste ändras innan den riktiga DOM:en ritas ut, vilket innebär att bara det som måste uppdateras gör så. Detta gör att React-applikationer blir väldigt snabba.',
      'Alla komponenter i React har en så kallad livscykel, och detta gör att vi enkelt kan styra vad som ska hända i olika ”stadier” av en komponents ”liv”. Vill vi t.ex. att vissa data ska hämtas när en komponent först renderas, och sedan byta utseende varje gång ett ”state” uppdateras så kan vi smidigt göra det.'
    ]
  },
  {
    question: 'Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?',
    answers: [
      'I en Single Page Application(SPA), finns hela webbplatsens innehåll på en och samma HTML-sida. Till skillnad mot en ”vanlig” Multi Page Application(MPA), som består av flera olika HTML-sidor med olika innehåll så bestämmer vi vad som ska renderas med hjälp av routes och states. Om du på en MPA klickar på en länk så måste webläsaren läsa in en hel ny sida och dess innehåll vilket är onödigt och tar lång tid. I en SPA behöver webbläsaren i stället bara läsa in det som har förändrats när vi klickar oss runt på sidan, och vi undviker då att hämta samma data flera gånger i onödan. Det är inte bara sidan som blir snabbare utan vi sparar dessutom mycket tid när vi utvecklar sidan då vi inte behöver skriva onödig och upprepande kod.'
    ]
  },
  {
    question: 'Nämn tre skillnader mellan React och Angular.',
    answers: [
      'Även om React ofta kallas för ett ramverk så är det egentligen ett bibliotek, vilket gör att man utan problem kan kombinera det med andra bibliotek medan Angular är ett ramverk med mer inbyggd funktionalitet.',
      'React är skapat av, och underhålls av Facebook medan Angular är skapat av Google.',
      'I React använder man jsx och i Angular används Typescript.'
    ]
  }
]

function App() {
  return (
    <div className="App">
      <h1>React Bulletin Board</h1>
      <BulletinBoard posts={posts}/>
    </div>
  );
}

export default App;
