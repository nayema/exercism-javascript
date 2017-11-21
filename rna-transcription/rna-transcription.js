const DnaTranscriber = function () {}

DnaTranscriber.prototype.toRna = function (dna) {
  let rna = []

  for (let i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case 'G':
        rna.push('C')
        continue
      case 'C':
        rna.push('G')
        continue
      case 'T':
        rna.push('A')
        continue
      case 'A':
        rna.push('U')
        continue
      default:
        throw new Error('Invalid input')
    }
  }
  return rna.join('')
}

module.exports = DnaTranscriber
