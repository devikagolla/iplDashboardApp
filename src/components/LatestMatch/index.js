// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    umpires,
    competingTeam,
    manOfTheMatch,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchData

  return (
    <div>
      <h1>Latest Matches</h1>
      <div>
        <div>
          <div>
            <p>{competingTeam}</p>
            <p>{date}</p>
            <p>{venue}</p>
            <p>{result}</p>
          </div>
          <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
        </div>
        <hr />
        <div>
          <p>First Innings</p>
          <p>{firstInnings}</p>
          <p>Second Innings</p>
          <p>{secondInnings}</p>
          <p>Man Of The Match</p>
          <p>{manOfTheMatch}</p>
          <p>Umpries</p>
          <p>{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
