import { connect } from 'react-redux';
// import React from 'react';
//
import EventDetail from './event_detail';
import { fetchEvent, fetchEventComments } from '../../actions/event_actions';

// // import { requestSingleRecipe, requestAllRecipes, destroyRecipe } from '../../actions/recipe_actions';
// // import { fetchIngredients, createIngredient } from '../../actions/ingredient_actions';
// // import { fetchDirections, createDirection } from '../../actions/direction_actions';
//
// const mapStateToProps = (state, ownProps) => {
//   const session_username = state.entities.users[state.session.id].username;
//   currentUser: state.session.user
//
//   return {
//     session_username
//   };
// };
const mapStateToProps = (state) => {
  return {
    events: Object.values(state.events.user),
    currentUser: state.session.user
  };
};
//
const mapDispatchToProps = dispatch => ({
  fetchEvent: id => dispatch(fetchEvent(id)),
  fetchEventComments: id => dispatch(fetchEventComments(id))

//   requestSingleRecipe: id => dispatch(requestSingleRecipe(id))
//   // requestAllRecipes: () => dispatch(requestAllRecipes),
//   // fetchIngredients: (rec_id) => dispatch(fetchIngredients(rec_id)),
//   // createIngredient: (recipe_id, ingredient ) => dispatch(createIngredient(recipe_id, ingredient )),
//   // fetchDirections: (rec_id) => dispatch(fetchDirections(rec_id)),
//   // createDirection: (recipe_id, direction ) => dispatch(createDirection(recipe_id, direction )),
//   // fetchComments: (rec_id) => dispatch(fetchComments(rec_id)),
//   // createComment: (recipe_id, comment ) => dispatch(createComment(recipe_id, comment )),
//   // destroyRecipe: (recipe) => dispatch(destroyRecipe(recipe)),
//   // createLike: (recipe_id, like ) => dispatch(createLike(recipe_id, like)),
//   // destroyLike: (like) =>dispatch(destroyLike(like))
});
//
//
export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);
