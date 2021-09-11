import { connect } from "react-redux";
import { profileSelectors, createEditNameMessages } from "../../store/profile";


const mapStateToProps = (state) => ({
  username: profileSelectors.getUserName(state),
})

const mapDispatchToProps = (dispatch) => ({

})

export const profileConnect = connect(mapStateToProps, mapDispatchToProps);