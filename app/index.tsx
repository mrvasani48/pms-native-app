import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LoginScreen } from '../src/screens/LoginScreen';
import { DashboardScreen } from '../src/screens/DashboardScreen';
import { AuthProvider, useAuth } from '../src/contexts/AuthContext';

const AppContent = () => {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      {user ? <DashboardScreen /> : <LoginScreen />}
    </View>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

