import React, { Component } from "react";
import PropTypes from "prop-types";
import "./SkillTag.css";

class SkillTag extends Component {
  render() {
    const { color, label } = this.props;
    return (
      <div className="sm-skill">
        <div className="sm-skill-flair">
          <span
            className="sm-skill-circle"
            style={{ backgroundColor: color }}
          />
          <span className="sm-skill-label">{label}</span>
        </div>
      </div>
    );
  }
}

SkillTag.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string
};

SkillTag.defaultProps = {
  color: "#574ddd",
  label: "#999"
};

export default SkillTag;
