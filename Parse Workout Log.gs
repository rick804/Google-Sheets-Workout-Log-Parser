function parseWorkoutLog() {
    const logSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Workout Log");
    const detailedSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Detailed Log");
    
    // Get data from Workout Log
    const logData = logSheet.getDataRange().getValues();
    let outputData = [];
    
    // Loop through each row in Workout Log (skip header)
    for (let i = 1; i < logData.length; i++) {
        const day = logData[i][0];
        const type = logData[i][1];
        
        // Loop through exercise columns in Workout Log
        for (let j = 2; j < logData[i].length; j++) {
            const exerciseEntry = logData[i][j];
            if (exerciseEntry) {
                const [exercise, sets] = exerciseEntry.split(":");
                const setList = sets.split("-");
                
                // Loop through each set for the exercise
                for (let k = 0; k < setList.length; k++) {
                    // Split each set by period (.) to get set type, weight, and reps
                    const setDetails = setList[k].split(",");
                    
                    let setType = "";
                    let weight = "";
                    let reps = "";
                    
                    // If there's at least 3 parts, extract set type, weight, and reps
                    if (setDetails.length === 3) {
                        setType = setDetails[0];  // set type (e.g., 'ds', 'f')
                        weight = setDetails[1];    // weight
                        reps = setDetails[2];      // reps
                    } else if (setDetails.length === 2) {
                        // If there's no set type (just weight.reps), it's a normal set
                        weight = setDetails[0];
                        reps = setDetails[1];
                    }

                    // Push the data for each set into the outputData array
                    outputData.push([day, type, exercise, k + 1, parseFloat(weight), parseInt(reps), setType]);
                }
            }
        }
    }
    
    // Clear old data in Detailed Log and add new data
    detailedSheet.getRange(2, 1, detailedSheet.getLastRow(), detailedSheet.getLastColumn()).clearContent();
    if (outputData.length > 0) {
        detailedSheet.getRange(2, 1, outputData.length, outputData[0].length).setValues(outputData);
    }
}
