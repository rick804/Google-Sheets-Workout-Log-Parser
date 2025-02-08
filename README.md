# Google-Sheets-Workout-Log-Parser

## WHAT IT DOES

Be able to log every part of your workout, date, type of exercise day, exercise name, reps, sets, type of set (i.e drop set, super set, set to failure) all within ONE row using parsing.

## INSRUCTIONS

1. Open a google sheet
2. Extensions --> Apps Script
3. Press add a file (the plus button)
4. Copy paste contents in Parse Workout Log.gs text file and put it into your new file
5. (Optional) Copy paste contents in Acronym Translator.gs file and put it into another new file
6. Press the run button when you want to parse
7. Done

## HOW TO USE

Create 3 columns
- DAY in column A
TYPE in column B
-  EXERCISES in column C

-In Day put the date
-In elements under TYPE put the type of workout (Legs, Pull, Chest (also use acronyms to input exercises quickly (i.e c automatically inputs Chest))
-In elements under EXERCISES input the exercise in this example notation:

tpd:42.5,8-42.5,5,f

Means the exercise is a Tricep Push Down (tpd), the first set had a weight of 42.5 lbs and the amount of reps done was 8. In the second set, the weight was 42.5 lbs, the amount of reps done was 5, and the set was a set to failure (f indicates set to failure). Any other exercise can be inputted to the right element of this one. (If this exercise is C2, the next exercise can be C3 and etc.)

This script will parse your log in a different Sheet called "Detailed Log" so that every number and character will be in its own cell-- Makes it easy to work with data using graphs and progressions if you want to.
