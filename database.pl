use DBI;
use strict;
# use warnings;
# use diagnostics;
use feature 'say';
use v5.18;

# The table within the sqlite3 database is named citizens.
# It was initialized with 3 text fields.

my $dbfile = "aliens.db";
my $dbconn = DBI->connect("dbi:SQLite:dbname=$dbfile", "", "");
my $stmt = $dbconn->prepare("SELECT * FROM citizens");
$stmt->execute();
while (my @row = $stmt->fetchrow_array){
    my $last;
    if($row[1] eq "None"){
        $last = "";
    } else {
        $last = " $row[1]";
    }
    say "$row[0]$last is from $row[2]"
}