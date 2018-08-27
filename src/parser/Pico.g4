grammar Pico;

program
  : EOL? symbols origin instructions
  ;

symbols
  : (symbolDecl? EOL)*
  ;

symbolDecl
  : identifier '=' constant
  ;

origin
  : ORG constant EOL
  ;

instructions
  : (line EOL)*
  ;

line
  : label? (instruction?)
  ;

instruction
  : moveInstr
  | arithmeticInstr
  | branchInstr
  | ioInstr
  | callInstr
  | returnInstr
  | stopInstr
  ;

moveInstr
  : MOV (argument ',' argument (',' argument)?)
  ;

arithmeticInstr
  : (ADD|SUB|DIV|MUL) argument ',' argument ',' argument
  ;

branchInstr
  : (BEQ|BGT) argument ',' argument ',' branchTarget
  ;

branchTarget
  : symbolDirectArg
  | symbolIndirectArg
  ;

ioInstr
  : (IN|OUT) argument (',' argument)?
  ;

callInstr
  : JSR symbolDirectArg
  ;

returnInstr
  : RTS
  ;

stopInstr
  : STOP (argument (',' argument (',' argument)?)?)?
  ;

label
  : identifier ':'
  ;

identifier
  : IDENTIFIER
  ;

constant
  : SIGN? NUMBER
  ;

constantArg
  : constant
  ;

symbolConstantArg
  : '#' identifier
  ;

symbolDirectArg
  : identifier
  ;

symbolIndirectArg
  : '(' identifier ')'
  ;

argument
  : constantArg | symbolConstantArg | symbolDirectArg | symbolIndirectArg
  ;

ORG: O R G;
MOV: M O V;
ADD: A D D;
SUB: S U B;
MUL: M U L;
DIV: D I V;
IN: I N;
OUT: O U T;
BEQ: B E Q;
BGT: B G T;
JSR: J S R;
RTS: R T S;
STOP: S T O P;

fragment A
   : ('a' | 'A')
   ;

fragment B
   : ('b' | 'B')
   ;

fragment C
   : ('c' | 'C')
   ;

fragment D
   : ('d' | 'D')
   ;

fragment E
   : ('e' | 'E')
   ;

fragment F
   : ('f' | 'F')
   ;

fragment G
   : ('g' | 'G')
   ;

fragment H
   : ('h' | 'H')
   ;

fragment I
   : ('i' | 'I')
   ;

fragment J
   : ('j' | 'J')
   ;

fragment K
   : ('k' | 'K')
   ;

fragment L
   : ('l' | 'L')
   ;

fragment M
   : ('m' | 'M')
   ;

fragment N
   : ('n' | 'N')
   ;

fragment O
   : ('o' | 'O')
   ;

fragment P
   : ('p' | 'P')
   ;

fragment Q
   : ('q' | 'Q')
   ;

fragment R
   : ('r' | 'R')
   ;

fragment S
   : ('s' | 'S')
   ;

fragment T
   : ('t' | 'T')
   ;

fragment U
   : ('u' | 'U')
   ;

fragment V
   : ('v' | 'V')
   ;

fragment W
   : ('w' | 'W')
   ;

fragment X
   : ('x' | 'X')
   ;

fragment Y
   : ('y' | 'Y')
   ;

fragment Z
   : ('z' | 'Z')
   ;

IDENTIFIER
  : [a-zA-Z][a-zA-Z0-9_]*
  ;

NUMBER
  : [0-9]+
  ;

SIGN
  : '+' | '-'
  ;

EOL
  : [\r\n]+
  ;

COMMENT
  : ';' ~ [\r\n]* -> skip
  ;

WS
  : [ \t] -> skip
  ;
