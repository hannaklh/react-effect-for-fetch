import AdviceSlip from './components/AdviceSlip.jsx'


function AdviceSection() {
/*
  const [advice, setAdvice] = useState([]);
  fetch('https://api.adviceslip.com/')
  .then(res => res.json())
  .then(setAdvice);
*/
  return (
    <section>
      <h2>Advice Section</h2>
      <section className="advice-slip">
        <h3>Some Advice</h3>
        <AdviceSlip />
        <button>Get More Advice</button>
        <button>Save to Favourties</button>
      </section>
      <section className="favorite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          <li>Measure twice, cut once.</li>
          <li>Don't let the bastards grind you down.</li>
          <li>Always the burrito.</li>
        </ul>
      </section>
    </section>
  )
}

export default AdviceSection
