import { useNavigate } from "react-router-dom";
const App =()=>{
  
    
  
    useEffect(() => {
        const unSubscribe = auth.onAuthStateChanged(async userAuth => {
  
            if(userAuth){
      
              const userRef = await createUserProfile(userAuth)
      
              userRef.onSnapshot(snapshot => {
                this.props.setCurrentUser({
                  currentUser : {
                    id: snapshot.id,
                    ...snapshot.data()
                  }
                },)
                // ()=>console.log(this.state))
              })
              
            }
            props.setCurrentUser(userAuth)
            
          })
          // console.log(this.state)
        }, [currentUser]);

      console.log('checking in App js render',props.currentUser);
     
      return (
        
        <div>
          <Header/>
          <Routes>
            {/* <Route  path="/" element={this.props.currentUser ? <Navigate from="/signIn_signUp/" to="/" /> : <SignIn_signUp/>}/> */}
            {/* <Route path="/signIn" element={<SignIn currentUser={this.props.currentUser}/>}/> */}
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/signIn_signUp" element={<SignIn_signUp/>}/>
          </Routes>
        </div>
      );
    
  }
  
  const mapStateToProps = ({user}) =>({
    currentUser : user.currentUser
  })
  
  const mapDispatchToProps = dispatch =>({
    setCurrentUser : (user) => dispatch(setCurrentUser(user))
  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(App)
  