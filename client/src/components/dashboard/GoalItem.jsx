import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NotesIcon from "@mui/icons-material/Notes";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

// import Circle from "./Circle";
import "../goals/home.css";

export default function GoalListItem(props) {
  const {
    id,
    name,
    status,
    category,
    deleteGoal,
    completeGoal,
    updateStatus,
    getGoalId,
  } = props;

  // console.log("GOALLISTITEM GOALID", id);
  const deleteHandler = () => {
    deleteGoal(id);
  };

  const taskHandler = () => {
    getGoalId(id);
  };

  return (
    <div
      className={` ${
        category === "Speed"
          ? category
          : category === "Flexibility"
          ? category
          : category === "Strength"
          ? category
          : category === "Endurance"
          ? category
          : "Cardio"
      } `}
    >
      <Card sx={{ width: "7rem", height: "5rem" }}>
        <div className='goal-card-content'>
          <Typography>{name}</Typography>
          <CardActions
            className='button-group'
            sx={{
              background: "white",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: 8 }} color='text.secondary'>
              {category}
            </Typography>
          </CardActions>
          {/* <CardContent
            id='progress-bar'
            className={`${
              category === "Speed"
                ? category
                : category === "Flexibility"
                ? category
                : category === "Strength"
                ? category
                : category === "Endurance"
                ? category
                : "Cardio"
            } `}
          ></CardContent> */}
        </div>
      </Card>
    </div>
  );
}
