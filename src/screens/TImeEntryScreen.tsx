import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { useAuth } from '../contexts/AuthContext';

export const TImeEntryScreen = () => {
  const { user, signOut } = useAuth();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>PMS Dashboard</Text>
      <View style={styles.profileContainer}>
        <Text style={styles.subtitle}>Profile Information</Text>
        <Text>Name: {`${user?.first_name || 'N/A'} ${user?.last_name || ''}`}</Text>
        <Text>Email: {user?.email || 'N/A'}</Text>
        <Text>Phone: {user?.phone_number || 'N/A'}</Text>
        <Text>Department: {user?.pods?.[0]?.name || 'N/A'}</Text>
        <Text>Position: {user?.is_admin_user ? 'Admin User' : 'Regular User'}</Text>
        <Text>Blood Group: {user?.blood_group || 'N/A'}</Text>
        <Text>Marital Status: {user?.marital_status || 'N/A'}</Text>
        <Text>Wedding Date: {user?.wedding_date || 'N/A'}</Text>
        <Text>Birth Date: {user?.birth_date || 'N/A'}</Text>
        <Text>Emergency Contact: {user?.emergency_number || 'N/A'}</Text>
        <Text>Personal Email: {user?.personal_email || 'N/A'}</Text>
        <Text>PAN: {user?.pan_number || 'N/A'}</Text>
        <Text>Aadhar Number: {user?.aadhar_number || 'N/A'}</Text>
        <Text>About Me: {user?.about_me || 'N/A'}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.subtitle}>Additional Details</Text>
        <Text>Task Entry Enabled: {user?.userdetails?.is_task_entry_enable ? 'Yes' : 'No'}</Text>
        <Text>Worklog Entry Enabled: {user?.userdetails?.is_worklog_entry_enable ? 'Yes' : 'No'}</Text>
        <Text>Task Entry Date: {user?.userdetails?.task_entry_date || 'N/A'}</Text>
        <Text>Worklog Entry Date: {user?.userdetails?.worklog_entry_date || 'N/A'}</Text>
        <Text>Team Code: {user?.userdetails?.code || 'N/A'}</Text>
      </View>
      <Button title="Sign Out" onPress={signOut} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  profileContainer: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  detailsContainer: {
    backgroundColor: '#e9e9e9',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
});
