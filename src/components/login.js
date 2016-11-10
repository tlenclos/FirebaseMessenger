import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Navigator
} from 'react-native';

import { Screen, Icon, Button, TextInput } from '@shoutem/ui';
import Firestack from 'react-native-firestack';

export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.firestack = new Firestack({
            debug: true
        });
        this.state = {
            user: null,
            email: 'tlenclos@jolicode.com',
            password: '123456'
        }
    }

    componentWillMount() {
        this.firestack.auth.listenForAuth((u) => {
            console.log('listenForAuth ->', u);
        });
    }

    loginWithEmail() {
        const { email, password } = this.state;

        this.firestack.auth.signInWithEmail(email, password)
            .then(u => {
                console.log('Signed in!', u);
                this.setState({
                    user: u,
                    email: '',
                    password: ''
                });
            })
            .catch(err => {
                console.log('An error occurred', err);
            });
    }

    componentWillUnmount() {
        this.firestack.auth.unlistenForAuth();
    }

    render() {
        const { email, password } = this.state;

        return (
            <Screen>
                <TextInput
                    placeholder='EMAIL'
                    value={email} />
                <TextInput
                    placeholder='PASSWORD'
                    secureTextEntry={true}
                    value={password}
                />
                <Button styleName="white" style={{height: 50}} onPress={(e) => this.loginWithEmail(navigator)}>
                    <Icon name="ic_user_profile" />
                    <Text>Login</Text>
                </Button>
            </Screen>
        );
    }
}
