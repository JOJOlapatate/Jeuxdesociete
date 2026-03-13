import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// --- COULEURS DU THÈME SYNTHWAVE ---
const theme = {
  bg: '#0A001A', // Fond très sombre
  primary: '#FF00FF', // Magenta néon
  secondary: '#00FFFF', // Cyan électrique
  text: '#FFFFFF',
  cardBg: '#1A0033', // Fond des cartes
};

// --- COMPOSANT : ÉCRAN ACCUEIL ---
function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* En-tête */}
        <View style={styles.header}>
          <Text style={styles.title}>ACCUEIL</Text>
          <Text style={styles.subtitle}>Bienvenue, Alex</Text>
        </View>

        {/* Statistiques (Cartes Néon) */}
        <Text style={styles.sectionTitle}>VOTRE COLLECTION</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>145</Text>
            <Text style={styles.statLabel}>JEUX</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>EN PRÊT</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>2</Text>
            <Text style={styles.statLabel}>FAVORIS</Text>
          </View>
        </View>

        {/* Activité Récente */}
        <Text style={styles.sectionTitle}>ACTIVITÉ RÉCENTE</Text>
        <TouchableOpacity style={styles.activityCard}>
          <View>
            <Text style={styles.gameTitle}>ROOT</Text>
            <Text style={styles.gameDetail}>Prêté à THOMAS - 12 Mars</Text>
          </View>
          <Text style={styles.arrow}>></Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

// --- ÉCRANS FICTIFS POUR LA NAVIGATION ---
function DummyScreen({ name }) {
  return (
    <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
      <Text style={[styles.title, { color: theme.secondary }]}>{name}</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

// --- APPLICATION PRINCIPALE ---
export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: theme.primary,
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Accueil" component={HomeScreen} />
        <Tab.Screen name="Bibliothèque" children={() => <DummyScreen name="Bibliothèque" />} />
        <Tab.Screen name="Prêts" children={() => <DummyScreen name="Prêts en cours" />} />
        <Tab.Screen name="Wishlist" children={() => <DummyScreen name="Liste de souhaits" />} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// --- STYLES (EFFETS NÉON) ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    marginTop: 40,
    marginBottom: 30,
  },
  title: {
    color: theme.text,
    fontSize: 28,
    fontWeight: 'bold',
    textShadowColor: theme.primary,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10, // Effet de lueur (Glow)
  },
  subtitle: {
    color: '#aaa',
    fontSize: 16,
    marginTop: 5,
  },
  sectionTitle: {
    color: theme.secondary,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 20,
    letterSpacing: 2,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    backgroundColor: theme.cardBg,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '30%',
    borderColor: theme.primary,
    borderWidth: 1,
    shadowColor: theme.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  statNumber: {
    color: theme.text,
    fontSize: 24,
    fontWeight: 'bold',
  },
  statLabel: {
    color: theme.primary,
    fontSize: 10,
    marginTop: 5,
    fontWeight: 'bold',
  },
  activityCard: {
    backgroundColor: theme.cardBg,
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: theme.secondary,
    borderWidth: 1,
  },
  gameTitle: {
    color: theme.text,
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: theme.secondary,
    textShadowRadius: 5,
  },
  gameDetail: {
    color: '#aaa',
    fontSize: 12,
    marginTop: 5,
  },
  arrow: {
    color: theme.primary,
    fontSize: 20,
    fontWeight: 'bold',
  },
  tabBar: {
    backgroundColor: '#05000D',
    borderTopColor: theme.primary,
    borderTopWidth: 1,
    paddingBottom: 5,
  }
});
