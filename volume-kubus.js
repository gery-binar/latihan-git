const formulaVolumeKubus = (sikuSiku) => {
    return sikuSiku * sikuSiku * sikuSiku
}

const sikusiku = Number(process.argv[2])

console.log(formulaVolumeKubus(sikusiku))
