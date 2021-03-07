const ProgressPulse: React.FC = () => {
  return (
    <>
      <div className="progress">
        <div
          class="progress-bar"
          role="progressbar"
          aria-valuenow="60"
          aria-valuemin="0"
          aria-valuemax="100"
          style="width: 60%;"
        >
          <span className="sr-only">60% Complete</span>
        </div>
        <span className="progress-type"></span>
        <span className="progress-completed"></span>
      </div>
    </>
  )
}

export { ProgressPulse }
