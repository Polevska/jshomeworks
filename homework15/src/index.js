import { hw1 } from "./homework1/index";
import { hw2 } from "./homework2/index";
import {
  getMaxDigit,
  capitalizeName,
  getRandomNumber,
  countLetter,
  deleteLetters,
  deleteDuplicteLetter,
} from "./homework3/index";
import {
  getPairs,
  getPairsPlusThemes,
  getStudentPlusMark,
  getPairsWithMarks,
} from "./homework4/index";
import {
  getRandomArray,
  getAverage,
  getMedian,
  filterEvenNumbers,
  countPositiveNumbers,
  getDividedByFive,
} from "./homework5/index";
import {
  getSubjects,
  getAverageMark,
  getStudentInfo,
  getStudentsNames,
  getBestStudent,
  calculateWordLetters,
} from "./homework6/index";
import {
  getMyTaxes,
  getMiddleTaxes,
  getTotalTaxes,
  getMySalary,
} from "./homework7/index";
import { Student, BudgetStudent } from "./homework8/index";
import { generateBlocks, generateBlocksInterval } from "./homework9/index";
import { handleKeyDown, playSound, displayLetter } from "./homework10/index";
import { getRandomChineseWord, getRandomChineseChar } from "./homework11/index";
import {
  fetchInfo,
  fetchCharacters,
  renderLoader,
  renderHeader,
  renderCharacter,
  renderCharacters,
  handleGetEpisodeInfo,
  handleNextButton,
} from "./homework12/index";
import {
  fetchPlanets,
  renderPlanets,
  handlePageLoad,
} from "./homework12/planets";
import { createIdGenerator, newFontGenerator } from "./homework13/index";

window.playSound = playSound;
