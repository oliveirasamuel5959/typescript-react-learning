import "./NotFound404Page.css";

export function NotFound404Page() {
  return (
    <>
      <div className="main-content">
        <p className="message">404 — Page Not Found</p>
        <span className="sub-message">
          The page you are looking for does not exist or was moved.
        </span>
      </div>
    </>
  );
}