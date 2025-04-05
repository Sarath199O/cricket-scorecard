import './MatchBetween.css';

export default function MatchBetween(props) {
  return(
    <div className="teams">Match between {props.teamA} and {props.teamB}</div>
  );
}