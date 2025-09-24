import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import {
  Colors,
  Spacing,
  Typography,
  Shadows,
} from '../../constants/theme';
import { RootStackParamList } from '../../types';

const questionsData = [
  {
    id: 1,
    category: 'Social Energy',
    question:
      'Do you recharge more by spending time alone, or being around people?',
    options: ['Extrovert', 'Ambivert', 'Introvert'],
  },
  {
    id: 2,
    category: 'Communication',
    question: 'How do you prefer to express your thoughts and feelings?',
    options: ['Direct', 'Balanced', 'Thoughtful'],
  },
  {
    id: 3,
    category: 'Decision Making',
    question:
      'When making important decisions, do you rely more on logic or intuition?',
    options: ['Logic', 'Both', 'Intuition'],
  },
  {
    id: 4,
    category: 'Lifestyle',
    question: 'Do you prefer structured plans or spontaneous adventures?',
    options: ['Structured', 'Flexible', 'Spontaneous'],
  },
  {
    id: 5,
    category: 'Relationships',
    question:
      'In relationships, do you value deep connections or broad social circles?',
    options: ['Deep', 'Both', 'Broad'],
  },
  {
    id: 6,
    category: 'Work Style',
    question: 'Do you work better in collaborative teams or independently?',
    options: ['Team', 'Mixed', 'Independent'],
  },
  {
    id: 7,
    category: 'Conflict Resolution',
    question: 'How do you typically handle disagreements?',
    options: ['Direct', 'Diplomatic', 'Avoid'],
  },
  {
    id: 8,
    category: 'Future Planning',
    question: 'Do you prefer to plan far ahead or live in the moment?',
    options: ['Plan Ahead', 'Balance', 'Live Now'],
  },
];

const QuestionnaireScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);

  const currentQuestion = questionsData[currentQuestionIndex];
  const totalQuestions = questionsData.length;

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...answers, selectedAnswer];
      setAnswers(newAnswers);

      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
      } else {
        // Questionnaire completed, navigate back
        navigation.goBack();
      }
    }
  };

  const SwitchComponent = ({
    options,
    selectedIndex,
    onSelect,
  }: {
    options: string[];
    selectedIndex: number | null;
    onSelect: (index: number) => void;
  }) => {
    return (
      <View style={styles.switchContainer}>
        <TouchableOpacity
          style={styles.labelButton}
          onPress={() => onSelect(0)}
        >
          <Text style={[styles.switchLabel, styles.topLabel]}>
            {options[0]}
          </Text>
        </TouchableOpacity>

        <View style={styles.switchTrack}>
          <View
            style={[
              styles.switchHandle,
              selectedIndex === 0 && styles.switchHandleTop,
              selectedIndex === 1 && styles.switchHandleMiddle,
              selectedIndex === 2 && styles.switchHandleBottom,
            ]}
          />

          <TouchableOpacity
            style={styles.middleLabelContainer}
            onPress={() => onSelect(1)}
          >
            <Text style={[styles.switchLabel, styles.middleLabel]}>
              {options[1]}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.labelButton}
          onPress={() => onSelect(2)}
        >
          <Text style={[styles.switchLabel, styles.bottomLabel]}>
            {options[2]}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.questionCounter}>
            {currentQuestionIndex + 1}/{totalQuestions}
          </Text>
        </View>

        <View style={styles.questionSection}>
          <Text style={styles.categoryLabel}>{currentQuestion.category}</Text>
          <Text style={styles.questionText}>{currentQuestion.question}</Text>
        </View>

        <View style={styles.answerSection}>
          <SwitchComponent
            options={currentQuestion.options}
            selectedIndex={selectedAnswer}
            onSelect={handleAnswerSelect}
          />
        </View>

        <View style={styles.buttonSection}>
          <TouchableOpacity
            style={[
              styles.nextButton,
              selectedAnswer === null && styles.nextButtonDisabled,
            ]}
            onPress={handleNext}
            disabled={selectedAnswer === null}
          >
            <Text style={styles.nextButtonText}>→</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.xl,
  },
  header: {
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  questionCounter: {
    fontSize: Typography.fontSize.lg,
    fontWeight: Typography.fontWeight.medium,
    color: Colors.text.secondary,
  },
  questionSection: {
    marginBottom: Spacing.xxl,
  },
  categoryLabel: {
    fontSize: Typography.fontSize.lg,
    fontWeight: Typography.fontWeight.medium,
    color: Colors.text.secondary,
    marginBottom: Spacing.sm,
  },
  questionText: {
    fontSize: 28,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.text.primary,
    lineHeight: 36,
  },
  answerSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: Spacing.xxl,
  },
  switchContainer: {
    alignItems: 'center',
    height: 300,
    justifyContent: 'space-between',
  },
  switchLabel: {
    fontSize: Typography.fontSize.lg,
    fontWeight: Typography.fontWeight.medium,
    color: Colors.text.secondary,
  },
  labelButton: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
  },
  topLabel: {
    marginBottom: Spacing.md,
  },
  bottomLabel: {
    marginTop: Spacing.md,
  },
  switchTrack: {
    width: 120,
    height: 200,
    backgroundColor: Colors.gray.light,
    borderRadius: 60,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    ...Shadows.small,
  },
  switchHandle: {
    width: 100,
    height: 60,
    backgroundColor: Colors.gray.dark,
    borderRadius: 30,
    position: 'absolute',
    ...Shadows.medium,
  },
  switchHandleTop: {
    top: 10,
  },
  switchHandleMiddle: {
    top: 70,
  },
  switchHandleBottom: {
    bottom: 10,
  },
  middleLabelContainer: {
    position: 'absolute',
    zIndex: 1,
  },
  middleLabel: {
    color: Colors.text.light,
    fontSize: Typography.fontSize.md,
  },
  buttonSection: {
    alignItems: 'center',
    paddingBottom: Spacing.xl,
  },
  nextButton: {
    width: 60,
    height: 60,
    backgroundColor: '#F5C842',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    ...Shadows.medium,
  },
  nextButtonDisabled: {
    backgroundColor: Colors.gray.medium,
    opacity: 0.5,
  },
  nextButtonText: {
    fontSize: 24,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.white,
  },
});

export default QuestionnaireScreen;
