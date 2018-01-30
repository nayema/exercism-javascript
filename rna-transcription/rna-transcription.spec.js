const DnaTranscriber = require('./rna-transcription')

describe('toRna()', function () {
  it('transcribes cytosine to guanine', function () {
    const dnaTranscriber = new DnaTranscriber()
    const dna = 'C'

    const result = dnaTranscriber.toRna(dna)

    expect(result).toEqual('G')
  })

  it('transcribes guanine to cytosine', function () {
    const dnaTranscriber = new DnaTranscriber()
    const dna = 'G'

    const result = dnaTranscriber.toRna(dna)

    expect(result).toEqual('C')
  })

  it('transcribes adenine to uracil', function () {
    const dnaTranscriber = new DnaTranscriber()
    const dna = 'A'

    const result = dnaTranscriber.toRna(dna)

    expect(result).toEqual('U')
  })

  it('transcribes thymine to adenine', function () {
    const dnaTranscriber = new DnaTranscriber()
    const dna = 'T'

    const result = dnaTranscriber.toRna(dna)

    expect(result).toEqual('A')
  })

  it('transcribes all dna nucleotides to their rna complements', function () {
    const dnaTranscriber = new DnaTranscriber()
    const dna = 'ACGTGGTCTTAA'

    const result = dnaTranscriber.toRna(dna)

    expect(result).toEqual('UGCACCAGAAUU')
  })

  it('correctly handles completely invalid input', function () {
    const dnaTranscriber = new DnaTranscriber()
    const dna = 'XXX'

    expect(function () {
      dnaTranscriber.toRna(dna)
    }).toThrow(
      new Error('Invalid input')
    )
  })

  it('correctly handles partially invalid input', function () {
    const dnaTranscriber = new DnaTranscriber()
    const dna = 'ACGTXXXCTTAA'

    expect(function () {
      dnaTranscriber.toRna(dna)
    }).toThrow(
      new Error('Invalid input')
    )
  })
})
