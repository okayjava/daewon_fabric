const s = require('shelljs');

s.rm('-rf', 'build');
s.mkdir('-p', 'build/server/blockchain/common');
s.mkdir('-p', 'build/server/blockchain/transaction');
s.cp('.env', 'build/.env');
s.cp('-R', 'public', 'build/public');
s.cp('-R', 'server/common', 'build/server/');
s.cp('-R', 'server/blockchain/common/*', 'build/server/blockchain/common');
s.cp('-R', 'server/blockchain/transaction/*', 'build/server/blockchain/transaction');
