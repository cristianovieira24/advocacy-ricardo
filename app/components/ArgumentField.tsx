export function ArgumentField() {
  return (
    <div className="argument-field" aria-hidden="true">
      <div className="argument-grid" />
      <div className="argument-plane plane-a">
        <span>01</span>
      </div>
      <div className="argument-plane plane-b">
        <span>facto</span>
      </div>
      <div className="argument-plane plane-c">
        <span>forma</span>
      </div>
      <svg className="argument-line" viewBox="0 0 560 620" fill="none">
        <path pathLength="1" d="M64 518 C 116 424, 88 292, 208 264 S 376 304, 444 180 S 452 84, 508 42" />
      </svg>
      <div className="argument-node node-a" />
      <div className="argument-node node-b" />
      <div className="argument-caption">estrutura / leitura / decisão</div>
    </div>
  );
}
