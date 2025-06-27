// Types
export interface Lesson {
  id: number;
  title: string;
  completed: boolean;
  duration: string;
  content?: string;
}

// Static data for modules
export const courseData = {
  title: "Investissement & Patrimoine",
  description:
    "Maîtrisez la gestion de patrimoine et l'investissement de A à Z",
  instructor: "Marie Dubois",
  rating: 4.9,
  totalLessons: 42,
  duration: "6h 15min",
  enrolled: 248,
  modules: [
    {
      id: 1,
      title: "01: Les Fondamentaux",
      duration: "45min",
      lessons: [
        {
          id: 1,
          title: "Introduction au patrimoine",
          completed: true,
          duration: "8min",
          content: `# Introduction au patrimoine

## Qu'est-ce que le patrimoine ?

Le patrimoine correspond à l'ensemble des biens, droits et obligations d'une personne physique ou morale. Il se compose de :

**Actifs** :
- Biens immobiliers (résidence principale, investissements locatifs)
- Placements financiers (actions, obligations, assurance vie)
- Liquidités (comptes courants, livrets d'épargne)
- Biens professionnels
- Objets de valeur

**Passifs** :
- Crédits immobiliers
- Crédits à la consommation
- Dettes diverses

## Pourquoi gérer son patrimoine ?

La gestion patrimoniale vise plusieurs objectifs :
- **Sécuriser** son avenir financier
- **Optimiser** la fiscalité
- **Transmettre** dans les meilleures conditions
- **Faire fructifier** ses avoirs

## Les étapes clés

1. **Diagnostic patrimonial** : faire le bilan de sa situation
2. **Définition d'objectifs** : court, moyen et long terme
3. **Stratégie d'allocation** : répartir ses investissements
4. **Mise en œuvre** : concrétiser les décisions
5. **Suivi et ajustements** : adapter aux évolutions`,
        },
        {
          id: 2,
          title: "Définir ses objectifs financiers",
          completed: false,
          duration: "12min",
          content: `# Définir ses objectifs financiers

## L'importance des objectifs

Avant tout investissement, il est crucial de définir clairement ses objectifs financiers. Ceux-ci détermineront :
- Le type d'investissements à privilégier
- L'horizon de placement
- Le niveau de risque acceptable

## Classification par horizon temporel

### Court terme (moins de 2 ans)
- Constitution d'une épargne de précaution
- Financement d'un projet immédiat
- **Solutions** : Livrets, comptes à terme

### Moyen terme (2 à 8 ans)
- Achat immobilier
- Financement des études des enfants
- **Solutions** : Assurance vie fonds euros, PEL

### Long terme (plus de 8 ans)
- Préparation de la retraite
- Constitution d'un capital de transmission
- **Solutions** : PEA, assurance vie UC, immobilier

## La méthode SMART

Vos objectifs doivent être :
- **S**pécifiques
- **M**esurables
- **A**ccessibles
- **R**éalistes
- **T**emporels

### Exemple concret
❌ "Je veux épargner plus"
✅ "Je veux constituer 20 000€ d'épargne de précaution en 18 mois"`,
        },
        {
          id: 3,
          title: "Profil d'investisseur",
          completed: false,
          duration: "10min",
          content: `# Profil d'investisseur

## Comprendre votre profil de risque

Votre profil d'investisseur détermine la répartition optimale de vos placements. Il dépend de :

### Facteurs objectifs
- **Âge** : plus vous êtes jeune, plus vous pouvez prendre de risques
- **Situation financière** : revenus, charges, patrimoine existant
- **Objectifs** : horizon de placement, montant visé

### Facteurs subjectifs
- **Tolérance au risque** : votre capacité émotionnelle à supporter les fluctuations
- **Expérience** : votre connaissance des marchés financiers
- **Situation personnelle** : stabilité professionnelle, familiale

## Les 3 profils types

### Profil Prudent
- Préservation du capital prioritaire
- Accepte des rendements faibles mais stables
- **Allocation** : 70% sécurisé, 30% dynamique

### Profil Équilibré
- Recherche un compromis rendement/risque
- Accepte une volatilité modérée
- **Allocation** : 50% sécurisé, 50% dynamique

### Profil Dynamique
- Recherche la performance à long terme
- Accepte une forte volatilité
- **Allocation** : 30% sécurisé, 70% dynamique`,
        },
        {
          id: 4,
          title: "Les différents types d'actifs",
          completed: false,
          duration: "15min",
          content: `# Les différents types d'actifs

## Classification des actifs

### Actifs monétaires
- **Liquidités** : comptes courants, livrets
- **Avantages** : disponibilité immédiate, capital garanti
- **Inconvénients** : rendement faible, érosion par l'inflation

### Actifs obligataires
- **Obligations d'État** : OAT, Bons du Trésor
- **Obligations d'entreprises** : corporate bonds
- **Rendement** : supérieur aux actifs monétaires
- **Risque** : risque de crédit, risque de taux

### Actifs actions
- **Actions individuelles** : parts de capital d'entreprises
- **ETF et OPCVM** : diversification automatique
- **Potentiel** : forte croissance long terme
- **Volatilité** : fluctuations importantes

### Actifs immobiliers
- **Immobilier direct** : biens physiques
- **SCPI** : immobilier mutualisé
- **Avantages** : valeur refuge, revenus réguliers
- **Contraintes** : illiquidité, frais de transaction

### Actifs alternatifs
- **Matières premières** : or, pétrole, agricole
- **Private equity** : capital investissement
- **Crypto-monnaies** : Bitcoin, Ethereum
- **Art et objets de collection**

## Corrélation entre actifs

L'importance de la **diversification** :
- Répartir les risques entre différentes classes d'actifs
- Lisser la volatilité du portefeuille
- Optimiser le couple rendement/risque`,
        },
      ],
    },
    {
      id: 2,
      title: "02: Épargne et Liquidités",
      duration: "1h 05min",
      lessons: [
        {
          id: 5,
          title: "Livret A, LDDS et autres livrets",
          completed: false,
          duration: "18min",
          content:
            "Contenu détaillé sur les livrets d'épargne réglementés, leurs avantages et inconvénients, plafonds et fiscalité.",
        },
        {
          id: 6,
          title: "Comptes à terme et dépôts",
          completed: false,
          duration: "15min",
          content:
            "Fonctionnement des comptes à terme, négociation des taux, durées optimales et comparaison avec les autres placements.",
        },
        {
          id: 7,
          title: "Fonds euros et capital garanti",
          completed: false,
          duration: "22min",
          content:
            "Mécanisme des fonds euros, garantie du capital, participation aux bénéfices et stratégies d'optimisation.",
        },
        {
          id: 8,
          title: "Stratégie de constitution d'épargne",
          completed: false,
          duration: "10min",
          content:
            "Méthodologie pour construire son épargne de précaution, montants recommandés et répartition optimale.",
        },
      ],
    },
    {
      id: 3,
      title: "03: Assurance Vie",
      duration: "1h 30min",
      lessons: [
        {
          id: 9,
          title: "Fonctionnement de l'assurance vie",
          completed: false,
          duration: "20min",
        },
        {
          id: 10,
          title: "Fonds euros vs unités de compte",
          completed: false,
          duration: "25min",
        },
        {
          id: 11,
          title: "Fiscalité de l'assurance vie",
          completed: false,
          duration: "18min",
        },
        {
          id: 12,
          title: "Transmission et succession",
          completed: false,
          duration: "15min",
        },
        {
          id: 13,
          title: "Choisir son contrat d'assurance vie",
          completed: false,
          duration: "12min",
        },
      ],
    },
    {
      id: 4,
      title: "04: Bourse et Actions",
      duration: "1h 45min",
      lessons: [
        {
          id: 14,
          title: "Introduction à la bourse",
          completed: false,
          duration: "20min",
        },
        {
          id: 15,
          title: "PEA et compte-titres",
          completed: false,
          duration: "25min",
        },
        {
          id: 16,
          title: "Analyse fondamentale",
          completed: false,
          duration: "30min",
        },
        {
          id: 17,
          title: "ETF et diversification",
          completed: false,
          duration: "18min",
        },
        {
          id: 18,
          title: "Stratégies d'investissement",
          completed: false,
          duration: "12min",
        },
      ],
    },
    {
      id: 5,
      title: "05: Immobilier",
      duration: "2h 10min",
      lessons: [
        {
          id: 19,
          title: "Résidence principale",
          completed: false,
          duration: "25min",
        },
        {
          id: 20,
          title: "Investissement locatif",
          completed: false,
          duration: "35min",
        },
        {
          id: 21,
          title: "SCPI et crowdfunding",
          completed: false,
          duration: "20min",
        },
        {
          id: 22,
          title: "Fiscalité immobilière",
          completed: false,
          duration: "30min",
        },
        {
          id: 23,
          title: "Financement et crédit",
          completed: false,
          duration: "20min",
        },
      ],
    },
    {
      id: 6,
      title: "06: Retraite et Prévoyance",
      duration: "55min",
      lessons: [
        {
          id: 24,
          title: "Système de retraite français",
          completed: false,
          duration: "20min",
        },
        {
          id: 25,
          title: "PER et épargne retraite",
          completed: false,
          duration: "25min",
        },
        {
          id: 26,
          title: "Prévoyance et assurances",
          completed: false,
          duration: "10min",
        },
      ],
    },
    {
      id: 7,
      title: "07: Fiscalité et Optimisation",
      duration: "1h 15min",
      lessons: [
        {
          id: 27,
          title: "Fiscalité des placements",
          completed: false,
          duration: "30min",
        },
        {
          id: 28,
          title: "Optimisation fiscale légale",
          completed: false,
          duration: "25min",
        },
        {
          id: 29,
          title: "Déclaration d'impôts",
          completed: false,
          duration: "20min",
        },
      ],
    },
  ],
};
