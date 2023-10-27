interface MajorCredits {
    credits: number
    brand: "MajorCredits"
}
interface MinorCredits {
    credits: number
    brand: "MinorCredits"
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): number {
    return subject1.credits + subject2.credits
}
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): number {
    return subject1.credits + subject2.credits
}


const majorSubject1: MajorCredits = { credits: 60, brand: "MajorCredits" };
const majorSubject2: MajorCredits = { credits: 40, brand: "MajorCredits" };

const minorSubject1: MinorCredits = { credits: 20, brand: "MinorCredits" };
const minorSubject2: MinorCredits = { credits: 30, brand: "MinorCredits" };

const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);

console.log("Total Major Credits:", totalMajorCredits);
console.log("Total Minor Credits:", totalMinorCredits);