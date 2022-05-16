const Homepage = () => (
  <div>
    <p>Repro decode bug (hard links to force hitting server)</p>
    <ul>
      <li>
        <a href="/hello">Valid route</a>
      </li>
      <li>
        <a href="/%c0">Invalid route</a>
      </li>
    </ul>
  </div>
);

export default Homepage;
