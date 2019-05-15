// React
import React, { Component } from "react";
import { connect } from "react-redux";

// Custom components
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Paper from "@material-ui/core/Paper";
import TextBox from "./TextBox/TextBox";

// Style tool
import { withStyles } from "@material-ui/core/styles";

// Constants
import { DISPLAY_PAPER_PADDING, VIEWPORT_HEIGHT, PAPER_DISTANCE, PAPER_WIDTH, BOX_HEIGHT } from "../../../constants/styles";
import { BLOOD_TYPE_B, CLAP, TRUMPET, OK } from "../../../constants/processors";
import { CHANGE } from "../../../constants/actions";

const styles = theme => ({
  textPaper: {
    marginTop: (VIEWPORT_HEIGHT - 2 * BOX_HEIGHT - PAPER_DISTANCE - 200) / 4,
    marginBottom: PAPER_DISTANCE,
    width:  `calc(${PAPER_WIDTH} + ${2 * DISPLAY_PAPER_PADDING}px)`,
    margin: "auto"
  },
  optionsBar: {
    backgroundColor: "lightgrey",
    borderRadius: "inherit",
    width: "100%",
    fontSize: "5rem"
  }
});

const mapDispatchToProps = dispatch => ({
  OnNavActionChanged: (event, processor) => dispatch({processor: processor, type: CHANGE})
});

const mapStateToProps = state => ({
  processor: state.processor
});

class ProcessorOptions extends Component {
  render() {
    return (
      <Paper className={this.props.classes.textPaper} elevation={4}>
        <BottomNavigation value={this.props.processor} onChange={this.props.OnNavActionChanged}
                          className={this.props.classes.optionsBar}>
          <BottomNavigationAction value={BLOOD_TYPE_B} icon="🅱️"/>
          <BottomNavigationAction value={CLAP} icon="👏"/>
          <BottomNavigationAction value={TRUMPET} icon="🎺"/>
          <BottomNavigationAction value={OK} icon="👌"/>
        </BottomNavigation>

        <TextBox type={this.props.processor}/>
      </Paper>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ProcessorOptions));