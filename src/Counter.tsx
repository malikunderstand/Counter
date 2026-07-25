import { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import '../src/App.css';

interface HistoryItem {
  value: number;
  action: 'increment' | 'decrement';
}

function Counter() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const handleIncrement = () => {
    setCount((prev) => {
      const newCount = prev + 1;
      setHistory((prevHistory) => [
        ...prevHistory,
        { value: newCount, action: 'increment' },
      ]);
      return newCount;
    });
  };

  const handleDecrement = () => {
    setCount((prev) => {
      const newCount = prev - 1;
      setHistory((prevHistory) => [
        ...prevHistory,
        { value: newCount, action: 'decrement' },
      ]);
      return newCount;
    });
  };

  const handleReset = () => {
    setCount(0);
    setHistory([]);
  };

  const getColor = () => {
    if (count > 0) return '#4caf50';
    if (count < 0) return '#e50914';
    return '#ffd700';
  };

  const getMessage = () => {
    if (count > 100) return '🚀 Legendary!';
    if (count > 50) return '🔥 On Fire!';
    if (count > 20) return '💪 Strong!';
    if (count > 10) return '👍 Good Job!';
    if (count > 0) return '📈 Going Up!';
    if (count === 0) return '✨ Start Counting';
    if (count > -10) return '📉 Going Down';
    if (count > -20) return '⚠️ Careful!';
    return '🚨 Danger Zone!';
  };

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className="counter-navbar">
        <div className="counter-container">
          <div className="counter-brand">
            <span className="brand-icon">🎬</span>
            <span className="brand-text">
              Counter<span>Pro</span>
            </span>
          </div>

          <div className="brand-stats">
            <span className="brand-badge">
              <i className="bx bx-history"></i> Steps: {history.length}
            </span>

            <span className="brand-badge">
              <i className="bx bx-trending-up"></i> Max:{' '}
              {Math.max(...history.map((h) => h.value), 0)}
            </span>
          </div>
        </div>
      </nav>

      {/* ===== COUNTER SECTION ===== */}
      <section className="counter-hero">
        <div className="counter-container">
          <div className="counter-grid">
            {/* Main Counter Card */}
            <div className="counter-card">
              <div className="counter-header">
                <span className="counter-badge">Live Counter</span>
                <h2 className="counter-title">Interactive Counter</h2>
                <div className="counter-line"></div>
              </div>

              <div className="counter-display">
                <div
                  className="counter-number"
                  style={{ color: getColor() }}
                >
                  {count}
                </div>

                <div className="counter-message">{getMessage()}</div>
              </div>

              <div className="counter-controls">
                <button
                  onClick={handleDecrement}
                  className="counter-btn btn-decrement"
                >
                  <i className="bx bx-minus"></i>
                </button>

                <button
                  onClick={handleReset}
                  className="counter-btn btn-reset"
                >
                  <i className="bx bx-reset"></i>
                </button>

                <button
                  onClick={handleIncrement}
                  className="counter-btn btn-increment"
                >
                  <i className="bx bx-plus"></i>
                </button>
              </div>

              <div className="counter-footer">
                <div className="counter-progress">
                  <div
                    className="counter-progress-bar"
                    style={{
                      width: `${Math.min(Math.abs(count), 100)}%`,
                      background: getColor(),
                    }}
                  ></div>
                </div>

                <div className="counter-tips">
                  <span>⬅️ Decrement</span>
                  <span>🔄 Reset</span>
                  <span>Increment ➡️</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="counter-stats">
              <div className="stat-card">
                <div className="stat-icon positive">
                  <i className="bx bx-up-arrow-alt"></i>
                </div>

                <div className="stat-info">
                  <span className="stat-label">Increments</span>
                  <span className="stat-value">
                    {history.filter((h) => h.action === 'increment').length}
                  </span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon negative">
                  <i className="bx bx-down-arrow-alt"></i>
                </div>

                <div className="stat-info">
                  <span className="stat-label">Decrements</span>
                  <span className="stat-value">
                    {history.filter((h) => h.action === 'decrement').length}
                  </span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon total">
                  <i className="bx bx-trending-up"></i>
                </div>

                <div className="stat-info">
                  <span className="stat-label">Total Actions</span>
                  <span className="stat-value">{history.length}</span>
                </div>
              </div>

              <div className="stat-card">
                <div
                  className="stat-icon status"
                  style={{
                    background: getColor() + '33',
                    color: getColor(),
                  }}
                >
                  <i className="bx bx-signal-4"></i>
                </div>

                <div className="stat-info">
                  <span className="stat-label">Status</span>
                  <span
                    className="stat-value"
                    style={{ color: getColor() }}
                  >
                    {count > 0
                      ? 'Positive'
                      : count < 0
                      ? 'Negative'
                      : 'Neutral'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* History */}
          {history.length > 0 && (
            <div className="counter-history">
              <div className="history-header">
                <h5>
                  <i className="bx bx-time"></i> Activity History
                </h5>

                <span className="history-count">
                  {history.length} actions
                </span>
              </div>

              <div className="history-list">
                {history
                  .slice(-10)
                  .reverse()
                  .map((item, index) => (
                    <div key={index} className="history-item">
                      <span className="history-action">
                        {item.action === 'increment' ? '➕' : '➖'}
                      </span>

                      <span className="history-value">
                        Count: {item.value}
                      </span>

                      <span className="history-time">
                        {new Date().toLocaleTimeString()}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="counter-footer-bottom">
        <div className="counter-container">
          <div className="footer-content">
            <div className="footer-brand">
              <span className="brand-icon">🎬</span>
              <span>
                Counter<span>Pro</span>
              </span>
            </div>

            <p className="footer-copyright">
              © 2026 <b>CounterPro</b> — Made with{' '}
              <i
                className="bx bxs-heart"
                style={{ color: '#e50914' }}
              ></i>{' '}
              for React
            </p>

            <div className="footer-social">
              <a href="#">
                <i className="bx bxl-github"></i>
              </a>

              <a href="#">
                <i className="bx bxl-twitter"></i>
              </a>

              <a href="#">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Counter;
