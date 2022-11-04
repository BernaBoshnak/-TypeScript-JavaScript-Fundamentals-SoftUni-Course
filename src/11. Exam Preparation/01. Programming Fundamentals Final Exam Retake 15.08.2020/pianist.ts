type PieceName = string
type PiecesThemselves = {
  composer: string
  key: string
}
type Collection = Record<PieceName, PiecesThemselves>

function pianist(input: Array<string>) {
  let NumPieces = Number(input.shift())
  input.pop()
  const collection: Collection = {}

  while (NumPieces) {
    const data = input.shift()

    if (data) {
      const [piece, composer, key] = data.split('|')
      const piecesThemselves: PiecesThemselves = {
        composer,
        key,
      }

      collection[piece] = piecesThemselves

      NumPieces--
    }
  }

  input.forEach((line) => {
    const info = line.split('|')
    const [command, piece, composer] = info
    const key = info.length < 4 ? info[2] : info[3]

    switch (command) {
      case 'Add':
        add(piece, composer, key)
        break
      case 'Remove':
        remove(piece)
        break
      case 'ChangeKey':
        changeKey(piece, key)
        break
    }
  })

  function add(piece: PieceName, composer: string, key: string) {
    if (collection[piece]) {
      console.log(`${piece} is already in the collection!`)
    } else {
      collection[piece] = { key, composer }
      console.log(`${piece} by ${composer} in ${key} added to the collection!`)
    }
  }

  function remove(piece: PieceName) {
    if (collection[piece]) {
      delete collection[piece]
      console.log(`Successfully removed ${piece}!`)
    } else {
      console.log(
        `Invalid operation! ${piece} does not exist in the collection.`,
      )
    }
  }

  function changeKey(piece: PieceName, newKey: string) {
    if (collection[piece]) {
      collection[piece].key = newKey
      console.log(`Changed the key of ${piece} to ${newKey}!`)
    } else {
      console.log(
        `Invalid operation! ${piece} does not exist in the collection.`,
      )
    }
  }

  const result = Object.entries(collection).map(([piece, pieceData]) => {
    return `${piece} -> Composer: ${pieceData.composer}, Key: ${pieceData.key}`
  })

  return result.join('\n')
}

console.log(
  pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop',
  ]),
)

// export {}
