import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";

class DisplayCategorySideBar extends Component {
  constructor(props) {
    console.log("in the constructor of sidebar");
    super(props);
    this.state = {
      category_id_list: this.props.category_id_list,
      category_dict: {},
      redirect: false,
      redirect_id: ""
    }
  }

  componentDidUpdate() {
    console.log("in component did upset");
  }

  componentDidMount() {
    console.log("inside sidebar");
    console.log(this.props.category_id_list);
    var self= this;
    console.log("in component will mount");
    let dictionary = {};

    for (let i = 0; i < this.state.category_id_list.length; i++){
      axios.get("/api/groupNameById?_id=" + this.state.category_id_list[i])
      .then(
        (res) => {
          dictionary[this.state.category_id_list[i]] = res.data.group;
          if  (i === this.state.category_id_list.length - 1) {
            self.setState({
              category_dict: dictionary
            }); //setting state here after got everything
            console.log("after setting the dict");
            console.log(self.state.category_dict);
          }
        },
        (err) => {
          console.log("error getting category name");
        }
      );
    }
  }

  redirectGroupPage(key){
    this.setState({
      redirect: true,
      redirect_id: key
    })
  }


  render() {
    console.log("in the reding");
    const categoryIdDict = this.state.category_dict;
    return (
        <div>
          {
            Object.keys(categoryIdDict).map((key, index) => (
              <Button primary
                      onClick={() => this.redirectGroupPage(key)}
                      key={index}>
                {categoryIdDict[key]}
              </Button>
            ))
          }

          {this.state.redirect &&
            <Redirect to={"group_page/" + this.state.redirect_id} />
          }
        </div>
    )
  }
}

DisplayCategorySideBar.propTypes = {
  category_id_list: PropTypes.object.isRequired
};

export default DisplayCategorySideBar;
