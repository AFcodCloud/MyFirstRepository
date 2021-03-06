import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../../common/FormsValidationComponent/FormValidation";
import { requared, maxLengthCreator } from "../../../../utils/validators/validators.js";

let maxLength = maxLengthCreator(5);

const MyPosts = React.memo(props => { 

  let postsElemets = props.profilePage.map(p => (
    <Post message={p.message} deletePost={props.deletePost} addLike={props.addLike} id={p.id} likesCount={p.likesCount} />
  ));

 
  let addPost=(values)=>{
     props.addPost(values.textPost)
  };
  return (
    <div className={s.postsBlock}>
      <h2>My posts</h2>
      <AddPostReduxForm onSubmit={addPost}/>
      <div className={s.posts}>{postsElemets}</div>
    </div>
  );
})

let AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={"textPost"}
          validate={[requared, maxLength]}
          placeholder="Post Message"
          component={Textarea}
        />
      </div>
      <div>
        <button className={s.button}>Add post</button>
      </div>
    </form>
  );
};
let AddPostReduxForm = reduxForm({ form: "posts" })(AddPostForm);

export default MyPosts;

