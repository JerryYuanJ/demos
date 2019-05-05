const {parse} = require('@babel/parser');
const o = require('@babel/generator');

const generate = o.default;

const code = `//ee
class Example {

  getName() {
    return 'jerry'

  }
}

`;
const ast = parse(code);

// see bottom comments
console.info(JSON.stringify(ast, null, 2))

const option = {
  minified: true, // 压缩代码
  comments: false // 忽略注释
}

const output = generate(ast, option , code);

console.info(output.code)


/*
{
  "type": "File",
  "start": 0,
  "end": 63,
  "loc": {
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 10,
      "column": 0
    }
  },
  "program": {
    "type": "Program",
    "start": 0,
    "end": 63,
    "loc": {
      "start": {
        "line": 1,
        "column": 0
      },
      "end": {
        "line": 10,
        "column": 0
      }
    },
    "sourceType": "script",
    "interpreter": null,
    "body": [
      {
        "type": "ClassDeclaration",
        "start": 5,
        "end": 61,
        "loc": {
          "start": {
            "line": 2,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 1
          }
        },
        "id": {
          "type": "Identifier",
          "start": 11,
          "end": 18,
          "loc": {
            "start": {
              "line": 2,
              "column": 6
            },
            "end": {
              "line": 2,
              "column": 13
            },
            "identifierName": "Example"
          },
          "name": "Example"
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 19,
          "end": 61,
          "loc": {
            "start": {
              "line": 2,
              "column": 14
            },
            "end": {
              "line": 8,
              "column": 1
            }
          },
          "body": [
            {
              "type": "ClassMethod",
              "start": 24,
              "end": 59,
              "loc": {
                "start": {
                  "line": 4,
                  "column": 2
                },
                "end": {
                  "line": 7,
                  "column": 3
                }
              },
              "static": false,
              "key": {
                "type": "Identifier",
                "start": 24,
                "end": 31,
                "loc": {
                  "start": {
                    "line": 4,
                    "column": 2
                  },
                  "end": {
                    "line": 4,
                    "column": 9
                  },
                  "identifierName": "getName"
                },
                "name": "getName"
              },
              "computed": false,
              "kind": "method",
              "id": null,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 34,
                "end": 59,
                "loc": {
                  "start": {
                    "line": 4,
                    "column": 12
                  },
                  "end": {
                    "line": 7,
                    "column": 3
                  }
                },
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 40,
                    "end": 54,
                    "loc": {
                      "start": {
                        "line": 5,
                        "column": 4
                      },
                      "end": {
                        "line": 5,
                        "column": 18
                      }
                    },
                    "argument": {
                      "type": "StringLiteral",
                      "start": 47,
                      "end": 54,
                      "loc": {
                        "start": {
                          "line": 5,
                          "column": 11
                        },
                        "end": {
                          "line": 5,
                          "column": 18
                        }
                      },
                      "extra": {
                        "rawValue": "jerry",
                        "raw": "'jerry'"
                      },
                      "value": "jerry"
                    }
                  }
                ],
                "directives": []
              }
            }
          ]
        },
        "leadingComments": [
          {
            "type": "CommentLine",
            "value": "ee",
            "start": 0,
            "end": 4,
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 4
              }
            }
          }
        ]
      }
    ],
    "directives": []
  },
  "comments": [
    {
      "type": "CommentLine",
      "value": "ee",
      "start": 0,
      "end": 4,
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 4
        }
      }
    }
  ]
}
*/