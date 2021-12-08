import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from './components/Main';
import FullInfo from './components/FullInfo';

const Stack = createStackNavigator()

export default function Navigate(){
    return <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name='Main'
                        component={Main}
                        options={
                            {
                                title:'Главная',
                                headerStyle:{backgroundColor: 'red', height:100},
                                headerTitleStyle:{color:'yellow', left:140, fontWeight: '400'}
                            }
                        }
                    />
                    <Stack.Screen
                        name='FullInfo'
                        component={FullInfo}
                        options={
                            {
                                title:'Статья',
                                headerStyle:{backgroundColor: 'silver' },
                                headerTitleStyle:{color:'black'}
                            }
                        }
                    />                       
                </Stack.Navigator>
            </NavigationContainer>
}