import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../../components/custom-button/CustomButton.component';
import { countActionType } from '../../redux/count/countAction';

const Contact = ({number,increaseNumber}) => {
    console.log("number in contact",number);
  return (
    <div>
        <h1> Count reading from redux</h1>
        <h2>{number}</h2>
        <CustomButton onClick={increaseNumber}>increase count</CustomButton>
    </div>);
};

const mapStateToProps = (state) => {
    return{
        number : state.count.number
    }
}

const mapDispatchToProps = (dispatch) => ({
    increaseNumber : (num) => dispatch(countActionType(num))
})
export default connect(mapStateToProps,mapDispatchToProps)(Contact);
