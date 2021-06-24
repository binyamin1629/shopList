import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { sginIn } from '../../authentication/EmailPasswordHandling'
import AuthForm from '../../components/AuthForm'






const SginInScreen = ({ navigation, sginUpUser, err }) => {




    console.log(`error ${err}`)

    return (
        <View>

            <AuthForm
                headerText="Sgin In"
                err={err}
                navigation={navigation}
                buttnTitle="Sgin In"
                navigateTo="Login"
                navigateText="Alredy Have An Acouunt? Login"
                handelPress={(email, password) => {
                    sginUpUser(email, password)
                }}
            />

    



        </View>
    )

}





const styles = StyleSheet.create({})



const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        sginUpUser: (email, password) => dispatch(sginIn(email, password)),
    }
}
const mapStateToProps = state => {

    return {

        err: state.AuthReducer.err,

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(SginInScreen)



// const [logedIn,setLogedIn]=useState(false)

// function stackTrace() {
//     var err = new Error();
//     return err.stack;
// }
// const [initializing, setInitializing] = useState(true);
// const [user, setUser] = useState();



// function onAuthStateChanged(user) {
//     setUser(user);
//     if (initializing) setInitializing(false);
// }

// useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber;
// }, []);


// if (initializing) {
//     return null;
// }

// if (newAction) {
//     if (!loginFailed && err === null) {
//         navigation.navigate('AppStack', { screen: 'Index' })
//     } else {
//         if (err !== ' ') {
//             alert(err);
//             errorNull()
//         }
//     }
// }

///actions 
// refreshLogin: () => dispatch(refreshLogin()),
// errorNull: () => dispatch(setErrorToNull())

//reducer 
// loginFailed: state.Auth.isLoginFailed,
// newAction: state.Auth.newAction,