---
tag: foodapp
---
1. **Component Name**: Modal

2. **Component Purpose**: To render the Modal pop up and backdrop classes using portals.

3. **Props being passed to it:** onClose function coming from App.js->Cart.js->this Modal file. [PropDrilling going on because the state is managed in the APP.JS file due to requirement of state lifting.]

4. **States created in it:** None

5. **Functions and their usage**: 
   1. Backdrop as a component.
   2. ModalOverlay as a component.


6. **Child Components**:
   * [[Backdrop]]
   * [[ModalOverlay]]
7. **Crucial Concepts in the file**:
	1. To render the portal we go in the HTML file, and add another div with an id of overlay, where we will render other things.
	2. In the Modal file we create the Backdrop and ModalOverlay as inline components in the same file.
	3. Then we render Modal and backdrop side by side in the React JSX being returned in the Modal.js file.

```
const portalElement = document.getElementById("overlays");
const Modal = (props) => {

  return (

    <Fragment>

      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}

      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}

      {/* {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)} */}

      {/* IMPORTANT TO NOTE:
       The order does not affect the layering order in which backdrop and modal are rendered because that has been taken care of by z-index property. */}

    </Fragment>

  );

};
```

