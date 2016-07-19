comp = loadComp mixins: [require "../src/getDPR.coffee"]

describe "getDPR", ->
  it 'should return devise pixel ratio', ->
    dpr = comp.getDPR()
    should.exist(dpr)
    expect(dpr).to.equal(2)
