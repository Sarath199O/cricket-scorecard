import './MatchHeader.css'
export default function MatchHeader(props) {
  return(
    <div className="teams">Match between {props.teamA} and {props.teamB}</div>
  );
}