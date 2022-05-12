import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  container: {
    padding: "0 5%",
    width: "100%",
    margin: "0",
    // backgroundColor: "blue",
    height: "90.5vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "45vh",
    padding: "10%",
    borderRadius: 10,
    border: "1px solid rgba(255, 255, 255, 0.92)",
    backgroundColor: "rgba(255,255,255,0.2)",
    boxShadow: "0px 4px 75px rgba(62, 158, 199, 0.2)",
    backdropFilter: "blur(50px)",
    color: "#686868",
    // fontWeight: "900"
  },
  infoCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
});
