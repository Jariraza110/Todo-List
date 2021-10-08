import react from "react";
import React, { Component } from "react";
import CommonButton from "./CommonButton";
import CommonInput from "./CommonInput";
class TodoListClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: "",
      listName: "",
      listEmail: "",
      listPhone: "",
      add: [],
      btnName: "Add",
      index: null,
      emailError: null,
      phoneError: null,
    };
  }
  AddList = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onAdd = async (e) => {
    e.preventDefault();
    let user = {
      listName: this.state.listName,
      listEmail: this.state.listEmail,
      listPhone: this.state.listPhone,
    };

    if (this.validate()) {
      console.warn(this.state);
      // this.setState(this.state.emailError);

      if (this.state.btnName == "Add") {
        if (
          this.state.listName !== "" &&
          this.state.listEmail !== "" &&
          this.state.listPhone !== ""
        ) {
          await this.setState({
            add: [...this.state.add, user],
            listName: "",
            listEmail: "",
            listPhone: "",
          });
        }
      } else  {
        let temp = [];
        temp = temp.concat(this.state.add);
        temp[this.state.index] = user;
        this.setState({
          add: [...temp],
          btnName: "Add",
          listName: "",
          listEmail: "",
          listPhone: "",
        });
      }
    }
  };
  handleDelete = (index) => {
    const newListAdd = [...this.state.add];
    newListAdd.splice(index, 1);
    this.setState((state) => ({
      add: newListAdd,
    }));
  };
  handleEdit = (item, i) => {
    this.setState({
      listName: item.listName,
      listEmail: item.listEmail,
      listPhone: item.listPhone,
      btnName: "Update",
      index: i,
    });
  };
  validate() {
    let emailError = "";
    let phoneError = "";
    const phonePattern = /^[0-9\b]+$/;
    if (
      !this.state.listPhone ||
      phonePattern.test(this.state.listPhone) === false
    ) {
      phoneError = "Invalid Phone Number";
      console.log(phoneError);
    }
    else 
      {
      this.setState({
        phoneError:""
      })
    }
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!this.state.listEmail || reg.test(this.state.listEmail) === false) {
      emailError = "Email Field is Invalid ";
    }
    else {
      this.setState({
        emailError:""
      })
    }
    if (
      (this.state.listEmail == "" || this.state.listName =="" || this.state.listPhone  =="")
    ) {
      alert("Can't enter an empty field");
      return false;
    } else if (emailError || phoneError) {
      this.setState({ emailError, phoneError });
      alert("You have entered an invalid field");
      return false;
    }
    return true;
  }
  render() {
    return (
      <>
        <h1> Todo List of Form Input Fields</h1>
        <div className="todo-main">
          <CommonInput
            className="todo-inner"
            onChange={this.AddList}
            name="listName"
            value={this.state.listName}
            placeholder="Enter Name"
            required
          />
          
          <CommonInput
            className="todo-inner"
            onChange={this.AddList}
            name="listEmail"
            value={this.state.listEmail}
            placeholder="Enter Email"
            required
          />
          <span className="validate-error">{this.state.emailError}</span>
          <CommonInput
            className="todo-inner"
            onChange={this.AddList}
            name="listPhone"
            value={this.state.listPhone}
            placeholder="Enter Phone"
            required
          />
          <span className="validate-error">{this.state.phoneError}</span>
          <CommonButton btnName={this.state.btnName} onClick={this.onAdd} />
        </div>

        <ul className="todoList">
          <table>
            <thead>
              <tr className="table-item-row">
                <td>Name</td>
                <td>Email</td>
                <td>Number</td>
              </tr>
            </thead>
            <tbody>
              {this.state.add.map((item, index) => {
                return (
                  <react.Fragment className="list_row" key={index}>
                    <tr className="table-add-row">
                      <td>{item.listName}</td>
                      <td>{item.listEmail}</td>
                      <td>{item.listPhone}</td>
                      <CommonButton
                        className="delete_btn"
                        btnName="Delete"
                        key={index}
                        onClick={this.handleDelete.bind(this, index)}
                      />
                      <CommonButton
                        btnName="Edit"
                        className="Edit_btn"
                        onClick={this.handleEdit.bind(this, item, index)}
                      />
                    </tr>
                  </react.Fragment>
                );
              })}
            </tbody>
          </table>
        </ul>
      </>
    );
  }
}
export default TodoListClass;
