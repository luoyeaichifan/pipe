// Pipe - A small and beautiful blogging platform written in golang.
// Copyright (C) 2017-2018, b3log.org
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

package util

import "testing"

func TestRandInts(t *testing.T) {
	ints := RandInts(0, 50, 5)
	if 5 != len(ints) {
		t.Errorf("generate random integers failed")
	}
}

func TestRandString(t *testing.T) {
	a := RandString(16)
	if 16 != len(a) {
		t.Error("generate random string failed")
	}
	b := RandString(16)
	if a == b {
		t.Error("generate random string failed")
	}
	t.Log(a, b)
}
