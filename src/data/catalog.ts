// Catalog generated at build time by parsing README.md of
// github.com/jwasham/coding-interview-university (see DATA-PLAN.md).
// 463 checklist items in source order; links copied verbatim from the README.

export interface CatalogLink { label: string; url: string }
export interface CatalogItem {
  key: string; n: number; chapter: string; topic: string;
  title: string; links: CatalogLink[]; depth: number;
}

export const CATALOG: CatalogItem[] = [
 {
  "key": "ciu-1",
  "n": 1,
  "chapter": "Algorithmic complexity / Big-O / Asymptotic analysis",
  "topic": "",
  "title": "Harvard CS50 - Asymptotic Notation (video)",
  "links": [
   {
    "label": "Harvard CS50 - Asymptotic Notation (video)",
    "url": "https://www.youtube.com/watch?v=iOq5kSKqeR4"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-2",
  "n": 2,
  "chapter": "Algorithmic complexity / Big-O / Asymptotic analysis",
  "topic": "",
  "title": "Big O Notations (general quick tutorial) (video)",
  "links": [
   {
    "label": "Big O Notations (general quick tutorial) (video)",
    "url": "https://www.youtube.com/watch?v=V6mKVRU1evU"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-3",
  "n": 3,
  "chapter": "Algorithmic complexity / Big-O / Asymptotic analysis",
  "topic": "",
  "title": "Big O Notation (and Omega and Theta) - best mathematical explanation (video)",
  "links": [
   {
    "label": "Big O Notation (and Omega and Theta) - best mathematical explanation (video)",
    "url": "https://www.youtube.com/watch?v=ei-A_wy5Yxw&index=2&list=PL1BaGV1cIH4UhkL8a9bJGG356covJ76qN"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-4",
  "n": 4,
  "chapter": "Algorithmic complexity / Big-O / Asymptotic analysis",
  "topic": "",
  "title": "Skiena (video)",
  "links": [
   {
    "label": "Skiena (video)",
    "url": "https://www.youtube.com/watch?v=z1mkCe3kVUA"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-5",
  "n": 5,
  "chapter": "Algorithmic complexity / Big-O / Asymptotic analysis",
  "topic": "",
  "title": "UC Berkeley Big O (video)",
  "links": [
   {
    "label": "UC Berkeley Big O (video)",
    "url": "https://archive.org/details/ucberkeley_webcast_VIS4YDpuP98"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-6",
  "n": 6,
  "chapter": "Algorithmic complexity / Big-O / Asymptotic analysis",
  "topic": "",
  "title": "Amortized Analysis (video)",
  "links": [
   {
    "label": "Amortized Analysis (video)",
    "url": "https://www.youtube.com/watch?v=B3SpQZaAZP4&index=10&list=PL1BaGV1cIH4UhkL8a9bJGG356covJ76qN"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-7",
  "n": 7,
  "chapter": "Algorithmic complexity / Big-O / Asymptotic analysis",
  "topic": "",
  "title": "TopCoder (includes recurrence relations and master theorem)",
  "links": [
   {
    "label": "Computational Complexity: Section 1",
    "url": "https://www.topcoder.com/thrive/articles/Computational%20Complexity%20part%20one"
   },
   {
    "label": "Computational Complexity: Section 2",
    "url": "https://www.topcoder.com/thrive/articles/Computational%20Complexity%20part%20two"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-8",
  "n": 8,
  "chapter": "Algorithmic complexity / Big-O / Asymptotic analysis",
  "topic": "",
  "title": "Cheat sheet",
  "links": [
   {
    "label": "Cheat sheet",
    "url": "http://bigocheatsheet.com/"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-9",
  "n": 9,
  "chapter": "Algorithmic complexity / Big-O / Asymptotic analysis",
  "topic": "",
  "title": "[Review] Analyzing Algorithms (playlist) in 18 minutes (video)",
  "links": [
   {
    "label": "[Review] Analyzing Algorithms (playlist) in 18 minutes (video)",
    "url": "https://www.youtube.com/playlist?list=PL9xmBV_5YoZMxejjIyFHWa-4nKg6sdoIv"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-10",
  "n": 10,
  "chapter": "Data Structures",
  "topic": "",
  "title": "About Arrays",
  "links": [
   {
    "label": "Arrays CS50 Harvard University",
    "url": "https://www.youtube.com/watch?v=tI_tIZFyKBw&t=3009s"
   },
   {
    "label": "Arrays (video)",
    "url": "https://www.coursera.org/lecture/data-structures/arrays-OsBSF"
   },
   {
    "label": "UC Berkeley CS61B - Linear and Multi-Dim Arrays (video)",
    "url": "https://archive.org/details/ucberkeley_webcast_Wp8oiO_CZZE"
   },
   {
    "label": "Dynamic Arrays (video)",
    "url": "https://www.coursera.org/lecture/data-structures/dynamic-arrays-EwbnV"
   },
   {
    "label": "Jagged Arrays (video)",
    "url": "https://www.youtube.com/watch?v=1jtrQqYpt7g"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-11",
  "n": 11,
  "chapter": "Data Structures",
  "topic": "",
  "title": "Implement a vector (mutable array with automatic resizing)",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-12",
  "n": 12,
  "chapter": "Data Structures",
  "topic": "Implement a vector (mutable array with automatic resizing)",
  "title": "Practice coding using arrays and pointers, and pointer math to jump to an index instead of using indexing.",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-13",
  "n": 13,
  "chapter": "Data Structures",
  "topic": "Implement a vector (mutable array with automatic resizing)",
  "title": "New raw data array with allocated memory",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-14",
  "n": 14,
  "chapter": "Data Structures",
  "topic": "Implement a vector (mutable array with automatic resizing)",
  "title": "size() - number of items",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-15",
  "n": 15,
  "chapter": "Data Structures",
  "topic": "Implement a vector (mutable array with automatic resizing)",
  "title": "capacity() - number of items it can hold",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-16",
  "n": 16,
  "chapter": "Data Structures",
  "topic": "Implement a vector (mutable array with automatic resizing)",
  "title": "is_empty()",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-17",
  "n": 17,
  "chapter": "Data Structures",
  "topic": "Implement a vector (mutable array with automatic resizing)",
  "title": "at(index) - returns the item at a given index, blows up if index out of bounds",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-18",
  "n": 18,
  "chapter": "Data Structures",
  "topic": "Implement a vector (mutable array with automatic resizing)",
  "title": "push(item)",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-19",
  "n": 19,
  "chapter": "Data Structures",
  "topic": "Implement a vector (mutable array with automatic resizing)",
  "title": "insert(index, item) - inserts item at index, shifts that index's value and trailing elements to the right",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-20",
  "n": 20,
  "chapter": "Data Structures",
  "topic": "Implement a vector (mutable array with automatic resizing)",
  "title": "prepend(item) - can use insert above at index 0",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-21",
  "n": 21,
  "chapter": "Data Structures",
  "topic": "Implement a vector (mutable array with automatic resizing)",
  "title": "pop() - remove from end, return value",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-22",
  "n": 22,
  "chapter": "Data Structures",
  "topic": "Implement a vector (mutable array with automatic resizing)",
  "title": "delete(index) - delete item at index, shifting all trailing elements left",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-23",
  "n": 23,
  "chapter": "Data Structures",
  "topic": "Implement a vector (mutable array with automatic resizing)",
  "title": "remove(item) - looks for value and removes index holding it (even if in multiple places)",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-24",
  "n": 24,
  "chapter": "Data Structures",
  "topic": "Implement a vector (mutable array with automatic resizing)",
  "title": "find(item) - looks for value and returns first index with that value, -1 if not found",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-25",
  "n": 25,
  "chapter": "Data Structures",
  "topic": "Implement a vector (mutable array with automatic resizing)",
  "title": "resize(new_capacity) // private function",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-26",
  "n": 26,
  "chapter": "Data Structures",
  "topic": "",
  "title": "Time",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-27",
  "n": 27,
  "chapter": "Data Structures",
  "topic": "",
  "title": "Space",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-28",
  "n": 28,
  "chapter": "Data Structures",
  "topic": "",
  "title": "Description",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-29",
  "n": 29,
  "chapter": "Data Structures",
  "topic": "Description",
  "title": "Linked Lists CS50 Harvard University - this builds the intuition.",
  "links": [
   {
    "label": "Linked Lists CS50 Harvard University",
    "url": "https://www.youtube.com/watch?v=2T-A_GFuoTo&t=650s"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-30",
  "n": 30,
  "chapter": "Data Structures",
  "topic": "Description",
  "title": "Singly Linked Lists (video)",
  "links": [
   {
    "label": "Singly Linked Lists (video)",
    "url": "https://www.coursera.org/lecture/data-structures/singly-linked-lists-kHhgK"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-31",
  "n": 31,
  "chapter": "Data Structures",
  "topic": "Description",
  "title": "CS 61B - Linked Lists 1 (video)",
  "links": [
   {
    "label": "CS 61B - Linked Lists 1 (video)",
    "url": "https://archive.org/details/ucberkeley_webcast_htzJdKoEmO0"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-32",
  "n": 32,
  "chapter": "Data Structures",
  "topic": "Description",
  "title": "CS 61B - Linked Lists 2 (video)",
  "links": [
   {
    "label": "CS 61B - Linked Lists 2 (video)",
    "url": "https://archive.org/details/ucberkeley_webcast_-c4I3gFYe3w"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-33",
  "n": 33,
  "chapter": "Data Structures",
  "topic": "Description",
  "title": "[Review] Linked lists in 4 minutes (video)",
  "links": [
   {
    "label": "[Review] Linked lists in 4 minutes (video)",
    "url": "https://youtu.be/F8AbOfQwl1c"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-34",
  "n": 34,
  "chapter": "Data Structures",
  "topic": "",
  "title": "C Code (video)",
  "links": [
   {
    "label": "C Code (video)",
    "url": "https://www.youtube.com/watch?v=QN6FPiD0Gzo"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-35",
  "n": 35,
  "chapter": "Data Structures",
  "topic": "",
  "title": "Linked List vs Arrays",
  "links": [
   {
    "label": "Core Linked Lists Vs Arrays (video)",
    "url": "https://www.coursera.org/lecture/data-structures-optimizing-performance/core-linked-lists-vs-arrays-rjBs9"
   },
   {
    "label": "In The Real World Linked Lists Vs Arrays (video)",
    "url": "https://www.coursera.org/lecture/data-structures-optimizing-performance/in-the-real-world-lists-vs-arrays-QUaUd"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-36",
  "n": 36,
  "chapter": "Data Structures",
  "topic": "",
  "title": "Why you should avoid linked lists (video)",
  "links": [
   {
    "label": "Why you should avoid linked lists (video)",
    "url": "https://www.youtube.com/watch?v=YQs6IC-vgmo"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-37",
  "n": 37,
  "chapter": "Data Structures",
  "topic": "",
  "title": "Gotcha: you need pointer to pointer knowledge",
  "links": [
   {
    "label": "Pointers to Pointers",
    "url": "https://www.eskimo.com/~scs/cclass/int/sx8.html"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-38",
  "n": 38,
  "chapter": "Data Structures",
  "topic": "",
  "title": "Implement (I did with tail pointer & without)",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-39",
  "n": 39,
  "chapter": "Data Structures",
  "topic": "Implement (I did with tail pointer & without)",
  "title": "size() - returns the number of data elements in the list",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-40",
  "n": 40,
  "chapter": "Data Structures",
  "topic": "Implement (I did with tail pointer & without)",
  "title": "empty() - bool returns true if empty",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-41",
  "n": 41,
  "chapter": "Data Structures",
  "topic": "Implement (I did with tail pointer & without)",
  "title": "value_at(index) - returns the value of the nth item (starting at 0 for first)",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-42",
  "n": 42,
  "chapter": "Data Structures",
  "topic": "Implement (I did with tail pointer & without)",
  "title": "push_front(value) - adds an item to the front of the list",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-43",
  "n": 43,
  "chapter": "Data Structures",
  "topic": "Implement (I did with tail pointer & without)",
  "title": "pop_front() - remove the front item and return its value",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-44",
  "n": 44,
  "chapter": "Data Structures",
  "topic": "Implement (I did with tail pointer & without)",
  "title": "push_back(value) - adds an item at the end",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-45",
  "n": 45,
  "chapter": "Data Structures",
  "topic": "Implement (I did with tail pointer & without)",
  "title": "pop_back() - removes end item and returns its value",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-46",
  "n": 46,
  "chapter": "Data Structures",
  "topic": "Implement (I did with tail pointer & without)",
  "title": "front() - get the value of the front item",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-47",
  "n": 47,
  "chapter": "Data Structures",
  "topic": "Implement (I did with tail pointer & without)",
  "title": "back() - get the value of the end item",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-48",
  "n": 48,
  "chapter": "Data Structures",
  "topic": "Implement (I did with tail pointer & without)",
  "title": "insert(index, value) - insert value at index, so the current item at that index is pointed to by the new item at the index",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-49",
  "n": 49,
  "chapter": "Data Structures",
  "topic": "Implement (I did with tail pointer & without)",
  "title": "erase(index) - removes node at given index",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-50",
  "n": 50,
  "chapter": "Data Structures",
  "topic": "Implement (I did with tail pointer & without)",
  "title": "value_n_from_end(n) - returns the value of the node at the nth position from the end of the list",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-51",
  "n": 51,
  "chapter": "Data Structures",
  "topic": "Implement (I did with tail pointer & without)",
  "title": "reverse() - reverses the list",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-52",
  "n": 52,
  "chapter": "Data Structures",
  "topic": "Implement (I did with tail pointer & without)",
  "title": "remove_value(value) - removes the first item in the list with this value",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-53",
  "n": 53,
  "chapter": "Data Structures",
  "topic": "",
  "title": "Doubly-linked List",
  "links": [
   {
    "label": "Description (video)",
    "url": "https://www.coursera.org/lecture/data-structures/doubly-linked-lists-jpGKD"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-54",
  "n": 54,
  "chapter": "Data Structures",
  "topic": "",
  "title": "Stacks (video)",
  "links": [
   {
    "label": "Stacks (video)",
    "url": "https://www.coursera.org/lecture/data-structures/stacks-UdKzQ"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-55",
  "n": 55,
  "chapter": "Data Structures",
  "topic": "",
  "title": "[Review] Stacks in 3 minutes (video)",
  "links": [
   {
    "label": "[Review] Stacks in 3 minutes (video)",
    "url": "https://youtu.be/KcT3aVgrrpU"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-56",
  "n": 56,
  "chapter": "Data Structures",
  "topic": "",
  "title": "Will not implement. Implementing with the array is trivial",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-57",
  "n": 57,
  "chapter": "Data Structures",
  "topic": "",
  "title": "Queue (video)",
  "links": [
   {
    "label": "Queue (video)",
    "url": "https://www.coursera.org/lecture/data-structures/queues-EShpq"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-58",
  "n": 58,
  "chapter": "Data Structures",
  "topic": "",
  "title": "Circular buffer/FIFO",
  "links": [
   {
    "label": "Circular buffer/FIFO",
    "url": "https://en.wikipedia.org/wiki/Circular_buffer"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-59",
  "n": 59,
  "chapter": "Data Structures",
  "topic": "",
  "title": "[Review] Queues in 3 minutes (video)",
  "links": [
   {
    "label": "[Review] Queues in 3 minutes (video)",
    "url": "https://youtu.be/D6gu-_tmEpQ"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-60",
  "n": 60,
  "chapter": "Data Structures",
  "topic": "",
  "title": "Implement using linked-list, with tail pointer",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-61",
  "n": 61,
  "chapter": "Data Structures",
  "topic": "",
  "title": "Implement using a fixed-sized array",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-62",
  "n": 62,
  "chapter": "Data Structures",
  "topic": "",
  "title": "Cost",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-63",
  "n": 63,
  "chapter": "Data Structures",
  "topic": "",
  "title": "Videos",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-64",
  "n": 64,
  "chapter": "Data Structures",
  "topic": "Videos",
  "title": "Hashing with Chaining (video)",
  "links": [
   {
    "label": "Hashing with Chaining (video)",
    "url": "https://www.youtube.com/watch?v=0M_kIqhwbFo&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb&index=8"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-65",
  "n": 65,
  "chapter": "Data Structures",
  "topic": "Videos",
  "title": "Table Doubling, Karp-Rabin (video)",
  "links": [
   {
    "label": "Table Doubling, Karp-Rabin (video)",
    "url": "https://www.youtube.com/watch?v=BRO7mVIFt08&index=9&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-66",
  "n": 66,
  "chapter": "Data Structures",
  "topic": "Videos",
  "title": "Open Addressing, Cryptographic Hashing (video)",
  "links": [
   {
    "label": "Open Addressing, Cryptographic Hashing (video)",
    "url": "https://www.youtube.com/watch?v=rvdJDijO2Ro&index=10&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-67",
  "n": 67,
  "chapter": "Data Structures",
  "topic": "Videos",
  "title": "PyCon 2010: The Mighty Dictionary (video)",
  "links": [
   {
    "label": "PyCon 2010: The Mighty Dictionary (video)",
    "url": "https://www.youtube.com/watch?v=C4Kc8xzcA68"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-68",
  "n": 68,
  "chapter": "Data Structures",
  "topic": "Videos",
  "title": "PyCon 2017: The Dictionary Even Mightier (video)",
  "links": [
   {
    "label": "PyCon 2017: The Dictionary Even Mightier (video)",
    "url": "https://www.youtube.com/watch?v=66P5FMkWoVU"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-69",
  "n": 69,
  "chapter": "Data Structures",
  "topic": "Videos",
  "title": "(Advanced) Randomization: Universal & Perfect Hashing (video)",
  "links": [
   {
    "label": "(Advanced) Randomization: Universal & Perfect Hashing (video)",
    "url": "https://www.youtube.com/watch?v=z0lJ2k0sl1g&list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp&index=11"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-70",
  "n": 70,
  "chapter": "Data Structures",
  "topic": "Videos",
  "title": "(Advanced) Perfect hashing (video)",
  "links": [
   {
    "label": "(Advanced) Perfect hashing (video)",
    "url": "https://www.youtube.com/watch?v=N0COwN14gt0&list=PL2B4EEwhKD-NbwZ4ezj7gyc_3yNrojKM9&index=4"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-71",
  "n": 71,
  "chapter": "Data Structures",
  "topic": "Videos",
  "title": "[Review] Hash tables in 4 minutes (video)",
  "links": [
   {
    "label": "[Review] Hash tables in 4 minutes (video)",
    "url": "https://youtu.be/knV86FlSXJ8"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-72",
  "n": 72,
  "chapter": "Data Structures",
  "topic": "",
  "title": "Online Courses",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-73",
  "n": 73,
  "chapter": "Data Structures",
  "topic": "Online Courses",
  "title": "Core Hash Tables (video)",
  "links": [
   {
    "label": "Core Hash Tables (video)",
    "url": "https://www.coursera.org/lecture/data-structures-optimizing-performance/core-hash-tables-m7UuP"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-74",
  "n": 74,
  "chapter": "Data Structures",
  "topic": "Online Courses",
  "title": "Data Structures (video)",
  "links": [
   {
    "label": "Data Structures (video)",
    "url": "https://www.coursera.org/learn/data-structures/home/week/4"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-75",
  "n": 75,
  "chapter": "Data Structures",
  "topic": "Online Courses",
  "title": "Phone Book Problem (video)",
  "links": [
   {
    "label": "Phone Book Problem (video)",
    "url": "https://www.coursera.org/lecture/data-structures/phone-book-problem-NYZZP"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-76",
  "n": 76,
  "chapter": "Data Structures",
  "topic": "Online Courses",
  "title": "distributed hash tables",
  "links": [
   {
    "label": "Instant Uploads And Storage Optimization In Dropbox (video)",
    "url": "https://www.coursera.org/lecture/data-structures/instant-uploads-and-storage-optimization-in-dropbox-DvaIb"
   },
   {
    "label": "Distributed Hash Tables (video)",
    "url": "https://www.coursera.org/lecture/data-structures/distributed-hash-tables-tvH8H"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-77",
  "n": 77,
  "chapter": "Data Structures",
  "topic": "",
  "title": "Implement with array using linear probing",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-78",
  "n": 78,
  "chapter": "More Knowledge",
  "topic": "",
  "title": "Binary Search (video)",
  "links": [
   {
    "label": "Binary Search (video)",
    "url": "https://www.youtube.com/watch?v=D5SrAga1pno"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-79",
  "n": 79,
  "chapter": "More Knowledge",
  "topic": "",
  "title": "Binary Search (video)",
  "links": [
   {
    "label": "Binary Search (video)",
    "url": "https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-80",
  "n": 80,
  "chapter": "More Knowledge",
  "topic": "",
  "title": "detail",
  "links": [
   {
    "label": "detail",
    "url": "https://www.topcoder.com/thrive/articles/Binary%20Search"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-81",
  "n": 81,
  "chapter": "More Knowledge",
  "topic": "",
  "title": "blueprint",
  "links": [
   {
    "label": "blueprint",
    "url": "https://leetcode.com/discuss/general-discussion/786126/python-powerful-ultimate-binary-search-template-solved-many-problems"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-82",
  "n": 82,
  "chapter": "More Knowledge",
  "topic": "",
  "title": "[Review] Binary search in 4 minutes (video)",
  "links": [
   {
    "label": "[Review] Binary search in 4 minutes (video)",
    "url": "https://youtu.be/fDKIpRe8GW4"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-83",
  "n": 83,
  "chapter": "More Knowledge",
  "topic": "",
  "title": "Implement",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-84",
  "n": 84,
  "chapter": "More Knowledge",
  "topic": "",
  "title": "Bits cheat sheet",
  "links": [
   {
    "label": "Bits cheat sheet",
    "url": "https://github.com/jwasham/coding-interview-university/blob/main/extras/cheat%20sheets/bits-cheat-sheet.pdf"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-85",
  "n": 85,
  "chapter": "More Knowledge",
  "topic": "",
  "title": "Get a really good understanding of manipulating bits with: &, |, ^, ~, >>, <<",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-86",
  "n": 86,
  "chapter": "More Knowledge",
  "topic": "Get a really good understanding of manipulating bits with: &, |, ^, ~, >>, <<",
  "title": "words)",
  "links": [
   {
    "label": "words",
    "url": "https://en.wikipedia.org/wiki/Word_(computer_architecture"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-87",
  "n": 87,
  "chapter": "More Knowledge",
  "topic": "Get a really good understanding of manipulating bits with: &, |, ^, ~, >>, <<",
  "title": "Good intro",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-88",
  "n": 88,
  "chapter": "More Knowledge",
  "topic": "Get a really good understanding of manipulating bits with: &, |, ^, ~, >>, <<",
  "title": "C Programming Tutorial 2-10: Bitwise Operators (video)",
  "links": [
   {
    "label": "C Programming Tutorial 2-10: Bitwise Operators (video)",
    "url": "https://www.youtube.com/watch?v=d0AwjSpNXR0"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-89",
  "n": 89,
  "chapter": "More Knowledge",
  "topic": "Get a really good understanding of manipulating bits with: &, |, ^, ~, >>, <<",
  "title": "Bit Manipulation",
  "links": [
   {
    "label": "Bit Manipulation",
    "url": "https://en.wikipedia.org/wiki/Bit_manipulation"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-90",
  "n": 90,
  "chapter": "More Knowledge",
  "topic": "Get a really good understanding of manipulating bits with: &, |, ^, ~, >>, <<",
  "title": "Bitwise Operation",
  "links": [
   {
    "label": "Bitwise Operation",
    "url": "https://en.wikipedia.org/wiki/Bitwise_operation"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-91",
  "n": 91,
  "chapter": "More Knowledge",
  "topic": "Get a really good understanding of manipulating bits with: &, |, ^, ~, >>, <<",
  "title": "Bithacks",
  "links": [
   {
    "label": "Bithacks",
    "url": "https://graphics.stanford.edu/~seander/bithacks.html"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-92",
  "n": 92,
  "chapter": "More Knowledge",
  "topic": "Get a really good understanding of manipulating bits with: &, |, ^, ~, >>, <<",
  "title": "The Bit Twiddler",
  "links": [
   {
    "label": "The Bit Twiddler",
    "url": "https://bits.stephan-brumme.com/"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-93",
  "n": 93,
  "chapter": "More Knowledge",
  "topic": "Get a really good understanding of manipulating bits with: &, |, ^, ~, >>, <<",
  "title": "The Bit Twiddler Interactive",
  "links": [
   {
    "label": "The Bit Twiddler Interactive",
    "url": "https://bits.stephan-brumme.com/interactive.html"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-94",
  "n": 94,
  "chapter": "More Knowledge",
  "topic": "Get a really good understanding of manipulating bits with: &, |, ^, ~, >>, <<",
  "title": "Bit Hacks (video)",
  "links": [
   {
    "label": "Bit Hacks (video)",
    "url": "https://www.youtube.com/watch?v=ZusiKXcz_ac"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-95",
  "n": 95,
  "chapter": "More Knowledge",
  "topic": "Get a really good understanding of manipulating bits with: &, |, ^, ~, >>, <<",
  "title": "Practice Operations",
  "links": [
   {
    "label": "Practice Operations",
    "url": "https://pconrad.github.io/old_pconrad_cs16/topics/bitOps/"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-96",
  "n": 96,
  "chapter": "More Knowledge",
  "topic": "",
  "title": "2s and 1s complement",
  "links": [
   {
    "label": "Binary: Plusses & Minuses (Why We Use Two's Complement) (video)",
    "url": "https://www.youtube.com/watch?v=lKTsv6iVxV4"
   },
   {
    "label": "1s Complement",
    "url": "https://en.wikipedia.org/wiki/Ones%27_complement"
   },
   {
    "label": "2s Complement",
    "url": "https://en.wikipedia.org/wiki/Two%27s_complement"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-97",
  "n": 97,
  "chapter": "More Knowledge",
  "topic": "",
  "title": "Count set bits",
  "links": [
   {
    "label": "4 ways to count bits in a byte (video)",
    "url": "https://youtu.be/Hzuzo9NJrlc"
   },
   {
    "label": "Count Bits",
    "url": "https://graphics.stanford.edu/~seander/bithacks.html#CountBitsSetKernighan"
   },
   {
    "label": "How To Count The Number Of Set Bits In a 32 Bit Integer",
    "url": "http://stackoverflow.com/questions/109023/how-to-count-the-number-of-set-bits-in-a-32-bit-integer"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-98",
  "n": 98,
  "chapter": "More Knowledge",
  "topic": "",
  "title": "Swap values",
  "links": [
   {
    "label": "Swap",
    "url": "https://bits.stephan-brumme.com/swap.html"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-99",
  "n": 99,
  "chapter": "More Knowledge",
  "topic": "",
  "title": "Absolute value",
  "links": [
   {
    "label": "Absolute Integer",
    "url": "https://bits.stephan-brumme.com/absInteger.html"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-100",
  "n": 100,
  "chapter": "Trees",
  "topic": "",
  "title": "Intro to Trees (video)",
  "links": [
   {
    "label": "Intro to Trees (video)",
    "url": "https://www.coursera.org/lecture/data-structures/trees-95qda"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-101",
  "n": 101,
  "chapter": "Trees",
  "topic": "",
  "title": "Tree Traversal (video)",
  "links": [
   {
    "label": "Tree Traversal (video)",
    "url": "https://www.coursera.org/lecture/data-structures/tree-traversal-fr51b"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-102",
  "n": 102,
  "chapter": "Trees",
  "topic": "",
  "title": "BFS(breadth-first search) and DFS(depth-first search) (video)",
  "links": [
   {
    "label": "BFS(breadth-first search) and DFS(depth-first search) (video)",
    "url": "https://www.youtube.com/watch?v=uWL6FJhq5fM"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-103",
  "n": 103,
  "chapter": "Trees",
  "topic": "",
  "title": "[Review] Breadth-first search in 4 minutes (video)",
  "links": [
   {
    "label": "[Review] Breadth-first search in 4 minutes (video)",
    "url": "https://youtu.be/HZ5YTanv5QE"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-104",
  "n": 104,
  "chapter": "Trees",
  "topic": "",
  "title": "[Review] Depth-first search in 4 minutes (video)",
  "links": [
   {
    "label": "[Review] Depth-first search in 4 minutes (video)",
    "url": "https://youtu.be/Urx87-NMm6c"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-105",
  "n": 105,
  "chapter": "Trees",
  "topic": "",
  "title": "[Review] Tree Traversal (playlist) in 11 minutes (video)",
  "links": [
   {
    "label": "[Review] Tree Traversal (playlist) in 11 minutes (video)",
    "url": "https://www.youtube.com/playlist?list=PL9xmBV_5YoZO1JC2RgEi04nLy6D-rKk6b"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-106",
  "n": 106,
  "chapter": "Trees",
  "topic": "",
  "title": "Binary Search Tree Review (video)",
  "links": [
   {
    "label": "Binary Search Tree Review (video)",
    "url": "https://www.youtube.com/watch?v=x6At0nzX92o&index=1&list=PLA5Lqm4uh9Bbq-E0ZnqTIa8LRaL77ica6"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-107",
  "n": 107,
  "chapter": "Trees",
  "topic": "",
  "title": "Introduction (video)",
  "links": [
   {
    "label": "Introduction (video)",
    "url": "https://www.coursera.org/learn/data-structures/lecture/E7cXP/introduction"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-108",
  "n": 108,
  "chapter": "Trees",
  "topic": "",
  "title": "MIT (video)",
  "links": [
   {
    "label": "MIT (video)",
    "url": "https://www.youtube.com/watch?v=76dhtgZt38A&ab_channel=MITOpenCourseWare"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-109",
  "n": 109,
  "chapter": "Trees",
  "topic": "MIT (video)",
  "title": "Binary search tree - Implementation in C/C++ (video)",
  "links": [
   {
    "label": "Binary search tree - Implementation in C/C++ (video)",
    "url": "https://www.youtube.com/watch?v=COZK7NATh4k&list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P&index=28"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-110",
  "n": 110,
  "chapter": "Trees",
  "topic": "MIT (video)",
  "title": "BST implementation - memory allocation in stack and heap (video)",
  "links": [
   {
    "label": "BST implementation - memory allocation in stack and heap (video)",
    "url": "https://www.youtube.com/watch?v=hWokyBoo0aI&list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P&index=29"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-111",
  "n": 111,
  "chapter": "Trees",
  "topic": "MIT (video)",
  "title": "Find min and max element in a binary search tree (video)",
  "links": [
   {
    "label": "Find min and max element in a binary search tree (video)",
    "url": "https://www.youtube.com/watch?v=Ut90klNN264&index=30&list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-112",
  "n": 112,
  "chapter": "Trees",
  "topic": "MIT (video)",
  "title": "Find the height of a binary tree (video)",
  "links": [
   {
    "label": "Find the height of a binary tree (video)",
    "url": "https://www.youtube.com/watch?v=_pnqMz5nrRs&list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P&index=31"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-113",
  "n": 113,
  "chapter": "Trees",
  "topic": "MIT (video)",
  "title": "Binary tree traversal - breadth-first and depth-first strategies (video)",
  "links": [
   {
    "label": "Binary tree traversal - breadth-first and depth-first strategies (video)",
    "url": "https://www.youtube.com/watch?v=9RHO6jU--GU&list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P&index=32"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-114",
  "n": 114,
  "chapter": "Trees",
  "topic": "MIT (video)",
  "title": "Binary tree: Level Order Traversal (video)",
  "links": [
   {
    "label": "Binary tree: Level Order Traversal (video)",
    "url": "https://www.youtube.com/watch?v=86g8jAQug04&index=33&list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-115",
  "n": 115,
  "chapter": "Trees",
  "topic": "MIT (video)",
  "title": "Binary tree traversal: Preorder, Inorder, Postorder (video)",
  "links": [
   {
    "label": "Binary tree traversal: Preorder, Inorder, Postorder (video)",
    "url": "https://www.youtube.com/watch?v=gm8DUJJhmY4&index=34&list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-116",
  "n": 116,
  "chapter": "Trees",
  "topic": "MIT (video)",
  "title": "Check if a binary tree is a binary search tree or not (video)",
  "links": [
   {
    "label": "Check if a binary tree is a binary search tree or not (video)",
    "url": "https://www.youtube.com/watch?v=yEwSGhSsT0U&index=35&list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-117",
  "n": 117,
  "chapter": "Trees",
  "topic": "MIT (video)",
  "title": "Delete a node from Binary Search Tree (video)",
  "links": [
   {
    "label": "Delete a node from Binary Search Tree (video)",
    "url": "https://www.youtube.com/watch?v=gcULXE7ViZw&list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P&index=36"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-118",
  "n": 118,
  "chapter": "Trees",
  "topic": "MIT (video)",
  "title": "Inorder Successor in a binary search tree (video)",
  "links": [
   {
    "label": "Inorder Successor in a binary search tree (video)",
    "url": "https://www.youtube.com/watch?v=5cPbNCrdotA&index=37&list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-119",
  "n": 119,
  "chapter": "Trees",
  "topic": "",
  "title": "Implement",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-120",
  "n": 120,
  "chapter": "Trees",
  "topic": "Implement",
  "title": "insert    // insert value into tree",
  "links": [
   {
    "label": "insert    // insert value into tree",
    "url": "https://leetcode.com/problems/insert-into-a-binary-search-tree/submissions/987660183/"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-121",
  "n": 121,
  "chapter": "Trees",
  "topic": "Implement",
  "title": "get_node_count // get count of values stored",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-122",
  "n": 122,
  "chapter": "Trees",
  "topic": "Implement",
  "title": "print_values // prints the values in the tree, from min to max",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-123",
  "n": 123,
  "chapter": "Trees",
  "topic": "Implement",
  "title": "delete_tree",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-124",
  "n": 124,
  "chapter": "Trees",
  "topic": "Implement",
  "title": "is_in_tree // returns true if a given value exists in the tree",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-125",
  "n": 125,
  "chapter": "Trees",
  "topic": "Implement",
  "title": "get_height // returns the height in nodes (single node's height is 1)",
  "links": [
   {
    "label": "get_height // returns the height in nodes (single node's height is 1)",
    "url": "https://www.geeksforgeeks.org/find-the-maximum-depth-or-height-of-a-tree/"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-126",
  "n": 126,
  "chapter": "Trees",
  "topic": "Implement",
  "title": "get_min   // returns the minimum value stored in the tree",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-127",
  "n": 127,
  "chapter": "Trees",
  "topic": "Implement",
  "title": "get_max   // returns the maximum value stored in the tree",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-128",
  "n": 128,
  "chapter": "Trees",
  "topic": "Implement",
  "title": "is_binary_search_tree",
  "links": [
   {
    "label": "is_binary_search_tree",
    "url": "https://leetcode.com/problems/validate-binary-search-tree/"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-129",
  "n": 129,
  "chapter": "Trees",
  "topic": "Implement",
  "title": "delete_value",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-130",
  "n": 130,
  "chapter": "Trees",
  "topic": "Implement",
  "title": "get_successor // returns the next-highest value in the tree after given value, -1 if none",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-131",
  "n": 131,
  "chapter": "Trees",
  "topic": "",
  "title": "Heap)",
  "links": [
   {
    "label": "Heap",
    "url": "https://en.wikipedia.org/wiki/Heap_(data_structure"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-132",
  "n": 132,
  "chapter": "Trees",
  "topic": "",
  "title": "Introduction (video)",
  "links": [
   {
    "label": "Introduction (video)",
    "url": "https://www.coursera.org/lecture/data-structures/introduction-2OpTs"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-133",
  "n": 133,
  "chapter": "Trees",
  "topic": "",
  "title": "Binary Trees (video)",
  "links": [
   {
    "label": "Binary Trees (video)",
    "url": "https://www.coursera.org/learn/data-structures/lecture/GRV2q/binary-trees"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-134",
  "n": 134,
  "chapter": "Trees",
  "topic": "",
  "title": "Tree Height Remark (video)",
  "links": [
   {
    "label": "Tree Height Remark (video)",
    "url": "https://www.coursera.org/learn/data-structures/supplement/S5xxz/tree-height-remark"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-135",
  "n": 135,
  "chapter": "Trees",
  "topic": "",
  "title": "Basic Operations (video)",
  "links": [
   {
    "label": "Basic Operations (video)",
    "url": "https://www.coursera.org/learn/data-structures/lecture/0g1dl/basic-operations"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-136",
  "n": 136,
  "chapter": "Trees",
  "topic": "",
  "title": "Complete Binary Trees (video)",
  "links": [
   {
    "label": "Complete Binary Trees (video)",
    "url": "https://www.coursera.org/learn/data-structures/lecture/gl5Ni/complete-binary-trees"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-137",
  "n": 137,
  "chapter": "Trees",
  "topic": "",
  "title": "Pseudocode (video)",
  "links": [
   {
    "label": "Pseudocode (video)",
    "url": "https://www.coursera.org/learn/data-structures/lecture/HxQo9/pseudocode"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-138",
  "n": 138,
  "chapter": "Trees",
  "topic": "",
  "title": "Heap Sort - jumps to start (video)",
  "links": [
   {
    "label": "Heap Sort - jumps to start (video)",
    "url": "https://youtu.be/odNJmw5TOEE?list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&t=3291"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-139",
  "n": 139,
  "chapter": "Trees",
  "topic": "",
  "title": "Heap Sort (video)",
  "links": [
   {
    "label": "Heap Sort (video)",
    "url": "https://www.coursera.org/lecture/data-structures/heap-sort-hSzMO"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-140",
  "n": 140,
  "chapter": "Trees",
  "topic": "",
  "title": "Building a heap (video)",
  "links": [
   {
    "label": "Building a heap (video)",
    "url": "https://www.coursera.org/lecture/data-structures/building-a-heap-dwrOS"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-141",
  "n": 141,
  "chapter": "Trees",
  "topic": "",
  "title": "MIT 6.006 Introduction to Algorithms: Binary Heaps",
  "links": [
   {
    "label": "MIT 6.006 Introduction to Algorithms: Binary Heaps",
    "url": "https://www.youtube.com/watch?v=Xnpo1atN-Iw&list=PLUl4u3cNGP63EdVPNLG3ToM6LaEUuStEY&index=12"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-142",
  "n": 142,
  "chapter": "Trees",
  "topic": "",
  "title": "CS 61B Lecture 24: Priority Queues (video)",
  "links": [
   {
    "label": "CS 61B Lecture 24: Priority Queues (video)",
    "url": "https://archive.org/details/ucberkeley_webcast_yIUFT6AKBGE"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-143",
  "n": 143,
  "chapter": "Trees",
  "topic": "",
  "title": "Linear Time BuildHeap (max-heap)",
  "links": [
   {
    "label": "Linear Time BuildHeap (max-heap)",
    "url": "https://www.youtube.com/watch?v=MiyLo8adrWw"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-144",
  "n": 144,
  "chapter": "Trees",
  "topic": "",
  "title": "[Review] Heap (playlist) in 13 minutes (video)",
  "links": [
   {
    "label": "[Review] Heap (playlist) in 13 minutes (video)",
    "url": "https://www.youtube.com/playlist?list=PL9xmBV_5YoZNsyqgPW-DNwUeT8F8uhWc6"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-145",
  "n": 145,
  "chapter": "Trees",
  "topic": "",
  "title": "Implement a max-heap",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-146",
  "n": 146,
  "chapter": "Trees",
  "topic": "Implement a max-heap",
  "title": "insert",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-147",
  "n": 147,
  "chapter": "Trees",
  "topic": "Implement a max-heap",
  "title": "sift_up - needed for insert",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-148",
  "n": 148,
  "chapter": "Trees",
  "topic": "Implement a max-heap",
  "title": "get_max - returns the max item, without removing it",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-149",
  "n": 149,
  "chapter": "Trees",
  "topic": "Implement a max-heap",
  "title": "get_size() - return number of elements stored",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-150",
  "n": 150,
  "chapter": "Trees",
  "topic": "Implement a max-heap",
  "title": "is_empty() - returns true if the heap contains no elements",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-151",
  "n": 151,
  "chapter": "Trees",
  "topic": "Implement a max-heap",
  "title": "extract_max - returns the max item, removing it",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-152",
  "n": 152,
  "chapter": "Trees",
  "topic": "Implement a max-heap",
  "title": "sift_down - needed for extract_max",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-153",
  "n": 153,
  "chapter": "Trees",
  "topic": "Implement a max-heap",
  "title": "remove(x) - removes item at index x",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-154",
  "n": 154,
  "chapter": "Trees",
  "topic": "Implement a max-heap",
  "title": "heapify - create a heap from an array of elements, needed for heap_sort",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-155",
  "n": 155,
  "chapter": "Trees",
  "topic": "Implement a max-heap",
  "title": "heap_sort() - take an unsorted array and turn it into a sorted array in place using a max heap or min heap",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-156",
  "n": 156,
  "chapter": "Sorting",
  "topic": "",
  "title": "Notes",
  "links": [],
  "depth": 0
 },
 {
  "key": "ciu-157",
  "n": 157,
  "chapter": "Sorting",
  "topic": "Notes",
  "title": "Stability in sorting algorithms (\"Is Quicksort stable?\")",
  "links": [
   {
    "label": "Sorting Algorithm Stability",
    "url": "https://en.wikipedia.org/wiki/Sorting_algorithm#Stability"
   },
   {
    "label": "Stability In Sorting Algorithms",
    "url": "http://stackoverflow.com/questions/1517793/stability-in-sorting-algorithms"
   },
   {
    "label": "Stability In Sorting Algorithms",
    "url": "http://www.geeksforgeeks.org/stability-in-sorting-algorithms/"
   },
   {
    "label": "Sorting Algorithms - Stability",
    "url": "http://homepages.math.uic.edu/~leon/cs-mcs401-s08/handouts/stability.pdf"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-158",
  "n": 158,
  "chapter": "Sorting",
  "topic": "Notes",
  "title": "Which algorithms can be used on linked lists? Which on arrays? Which of both?",
  "links": [
   {
    "label": "Merge Sort For Linked List",
    "url": "http://www.geeksforgeeks.org/merge-sort-for-linked-list/"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-159",
  "n": 159,
  "chapter": "Sorting",
  "topic": "",
  "title": "Sedgewick - Mergesort (5 videos)",
  "links": [
   {
    "label": "Sedgewick - Mergesort (5 videos)",
    "url": "https://www.coursera.org/learn/algorithms-part1/home/week/3"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-160",
  "n": 160,
  "chapter": "Sorting",
  "topic": "Sedgewick - Mergesort (5 videos)",
  "title": "1. Mergesort",
  "links": [
   {
    "label": "1. Mergesort",
    "url": "https://www.coursera.org/lecture/algorithms-part1/mergesort-ARWDq"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-161",
  "n": 161,
  "chapter": "Sorting",
  "topic": "Sedgewick - Mergesort (5 videos)",
  "title": "2. Bottom-up Mergesort",
  "links": [
   {
    "label": "2. Bottom-up Mergesort",
    "url": "https://www.coursera.org/learn/algorithms-part1/lecture/PWNEl/bottom-up-mergesort"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-162",
  "n": 162,
  "chapter": "Sorting",
  "topic": "Sedgewick - Mergesort (5 videos)",
  "title": "3. Sorting Complexity",
  "links": [
   {
    "label": "3. Sorting Complexity",
    "url": "https://www.coursera.org/lecture/algorithms-part1/sorting-complexity-xAltF"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-163",
  "n": 163,
  "chapter": "Sorting",
  "topic": "Sedgewick - Mergesort (5 videos)",
  "title": "4. Comparators",
  "links": [
   {
    "label": "4. Comparators",
    "url": "https://www.coursera.org/lecture/algorithms-part1/comparators-9FYhS"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-164",
  "n": 164,
  "chapter": "Sorting",
  "topic": "Sedgewick - Mergesort (5 videos)",
  "title": "5. Stability",
  "links": [
   {
    "label": "5. Stability",
    "url": "https://www.coursera.org/learn/algorithms-part1/lecture/pvvLZ/stability"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-165",
  "n": 165,
  "chapter": "Sorting",
  "topic": "",
  "title": "Sedgewick - Quicksort (4 videos)",
  "links": [
   {
    "label": "Sedgewick - Quicksort (4 videos)",
    "url": "https://www.coursera.org/learn/algorithms-part1/home/week/3"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-166",
  "n": 166,
  "chapter": "Sorting",
  "topic": "Sedgewick - Quicksort (4 videos)",
  "title": "1. Quicksort",
  "links": [
   {
    "label": "1. Quicksort",
    "url": "https://www.coursera.org/lecture/algorithms-part1/quicksort-vjvnC"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-167",
  "n": 167,
  "chapter": "Sorting",
  "topic": "Sedgewick - Quicksort (4 videos)",
  "title": "2. Selection",
  "links": [
   {
    "label": "2. Selection",
    "url": "https://www.coursera.org/lecture/algorithms-part1/selection-UQxFT"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-168",
  "n": 168,
  "chapter": "Sorting",
  "topic": "Sedgewick - Quicksort (4 videos)",
  "title": "3. Duplicate Keys",
  "links": [
   {
    "label": "3. Duplicate Keys",
    "url": "https://www.coursera.org/lecture/algorithms-part1/duplicate-keys-XvjPd"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-169",
  "n": 169,
  "chapter": "Sorting",
  "topic": "Sedgewick - Quicksort (4 videos)",
  "title": "4. System Sorts",
  "links": [
   {
    "label": "4. System Sorts",
    "url": "https://www.coursera.org/lecture/algorithms-part1/system-sorts-QBNZ7"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-170",
  "n": 170,
  "chapter": "Sorting",
  "topic": "",
  "title": "UC Berkeley",
  "links": [],
  "depth": 0
 },
 {
  "key": "ciu-171",
  "n": 171,
  "chapter": "Sorting",
  "topic": "UC Berkeley",
  "title": "CS 61B Lecture 29: Sorting I (video)",
  "links": [
   {
    "label": "CS 61B Lecture 29: Sorting I (video)",
    "url": "https://archive.org/details/ucberkeley_webcast_EiUvYS2DT6I"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-172",
  "n": 172,
  "chapter": "Sorting",
  "topic": "UC Berkeley",
  "title": "CS 61B Lecture 30: Sorting II (video)",
  "links": [
   {
    "label": "CS 61B Lecture 30: Sorting II (video)",
    "url": "https://archive.org/details/ucberkeley_webcast_2hTY3t80Qsk"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-173",
  "n": 173,
  "chapter": "Sorting",
  "topic": "UC Berkeley",
  "title": "CS 61B Lecture 32: Sorting III (video)",
  "links": [
   {
    "label": "CS 61B Lecture 32: Sorting III (video)",
    "url": "https://archive.org/details/ucberkeley_webcast_Y6LOLpxg6Dc"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-174",
  "n": 174,
  "chapter": "Sorting",
  "topic": "UC Berkeley",
  "title": "CS 61B Lecture 33: Sorting V (video)",
  "links": [
   {
    "label": "CS 61B Lecture 33: Sorting V (video)",
    "url": "https://archive.org/details/ucberkeley_webcast_qNMQ4ly43p4"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-175",
  "n": 175,
  "chapter": "Sorting",
  "topic": "UC Berkeley",
  "title": "CS 61B 2014-04-21: Radix Sort(video)",
  "links": [
   {
    "label": "CS 61B 2014-04-21: Radix Sort(video)",
    "url": "https://archive.org/details/ucberkeley_webcast_pvbBMd-3NoI"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-176",
  "n": 176,
  "chapter": "Sorting",
  "topic": "",
  "title": "Bubble Sort (video)",
  "links": [
   {
    "label": "Bubble Sort (video)",
    "url": "https://www.youtube.com/watch?v=P00xJgWzz2c&index=1&list=PL89B61F78B552C1AB"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-177",
  "n": 177,
  "chapter": "Sorting",
  "topic": "",
  "title": "Analyzing Bubble Sort (video)",
  "links": [
   {
    "label": "Analyzing Bubble Sort (video)",
    "url": "https://www.youtube.com/watch?v=ni_zk257Nqo&index=7&list=PL89B61F78B552C1AB"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-178",
  "n": 178,
  "chapter": "Sorting",
  "topic": "",
  "title": "Insertion Sort, Merge Sort (video)",
  "links": [
   {
    "label": "Insertion Sort, Merge Sort (video)",
    "url": "https://www.youtube.com/watch?v=Kg4bqzAqRBM&index=3&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-179",
  "n": 179,
  "chapter": "Sorting",
  "topic": "",
  "title": "Insertion Sort (video)",
  "links": [
   {
    "label": "Insertion Sort (video)",
    "url": "https://www.youtube.com/watch?v=c4BRHC7kTaQ&index=2&list=PL89B61F78B552C1AB"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-180",
  "n": 180,
  "chapter": "Sorting",
  "topic": "",
  "title": "Merge Sort (video)",
  "links": [
   {
    "label": "Merge Sort (video)",
    "url": "https://www.youtube.com/watch?v=GCae1WNvnZM&index=3&list=PL89B61F78B552C1AB"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-181",
  "n": 181,
  "chapter": "Sorting",
  "topic": "",
  "title": "Quicksort (video)",
  "links": [
   {
    "label": "Quicksort (video)",
    "url": "https://www.youtube.com/watch?v=y_G9BkAm6B8&index=4&list=PL89B61F78B552C1AB"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-182",
  "n": 182,
  "chapter": "Sorting",
  "topic": "",
  "title": "Selection Sort (video)",
  "links": [
   {
    "label": "Selection Sort (video)",
    "url": "https://www.youtube.com/watch?v=6nDMgr0-Yyo&index=8&list=PL89B61F78B552C1AB"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-183",
  "n": 183,
  "chapter": "Sorting",
  "topic": "",
  "title": "Merge sort code",
  "links": [],
  "depth": 0
 },
 {
  "key": "ciu-184",
  "n": 184,
  "chapter": "Sorting",
  "topic": "Merge sort code",
  "title": "Using output array (C)",
  "links": [
   {
    "label": "Using output array (C)",
    "url": "http://www.cs.yale.edu/homes/aspnes/classes/223/examples/sorting/mergesort.c"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-185",
  "n": 185,
  "chapter": "Sorting",
  "topic": "Merge sort code",
  "title": "Using output array (Python)",
  "links": [
   {
    "label": "Using output array (Python)",
    "url": "https://github.com/jwasham/practice-python/blob/master/merge_sort/merge_sort.py"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-186",
  "n": 186,
  "chapter": "Sorting",
  "topic": "Merge sort code",
  "title": "In-place (C++)",
  "links": [
   {
    "label": "In-place (C++)",
    "url": "https://github.com/jwasham/practice-cpp/blob/master/merge_sort/merge_sort.cc"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-187",
  "n": 187,
  "chapter": "Sorting",
  "topic": "",
  "title": "Quick sort code",
  "links": [],
  "depth": 0
 },
 {
  "key": "ciu-188",
  "n": 188,
  "chapter": "Sorting",
  "topic": "Quick sort code",
  "title": "Implementation (C)",
  "links": [
   {
    "label": "Implementation (C)",
    "url": "http://www.cs.yale.edu/homes/aspnes/classes/223/examples/randomization/quick.c"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-189",
  "n": 189,
  "chapter": "Sorting",
  "topic": "Quick sort code",
  "title": "Implementation (C)",
  "links": [
   {
    "label": "Implementation (C)",
    "url": "https://github.com/jwasham/practice-c/blob/master/quick_sort/quick_sort.c"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-190",
  "n": 190,
  "chapter": "Sorting",
  "topic": "Quick sort code",
  "title": "Implementation (Python)",
  "links": [
   {
    "label": "Implementation (Python)",
    "url": "https://github.com/jwasham/practice-python/blob/master/quick_sort/quick_sort.py"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-191",
  "n": 191,
  "chapter": "Sorting",
  "topic": "",
  "title": "[Review] Sorting (playlist) in 18 minutes",
  "links": [
   {
    "label": "[Review] Sorting (playlist) in 18 minutes",
    "url": "https://www.youtube.com/playlist?list=PL9xmBV_5YoZOZSbGAXAPIq1BeUf4j20pl"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-192",
  "n": 192,
  "chapter": "Sorting",
  "topic": "[Review] Sorting (playlist) in 18 minutes",
  "title": "Quick sort in 4 minutes (video)",
  "links": [
   {
    "label": "Quick sort in 4 minutes (video)",
    "url": "https://youtu.be/Hoixgm4-P4M"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-193",
  "n": 193,
  "chapter": "Sorting",
  "topic": "[Review] Sorting (playlist) in 18 minutes",
  "title": "Heap sort in 4 minutes (video)",
  "links": [
   {
    "label": "Heap sort in 4 minutes (video)",
    "url": "https://youtu.be/2DmK_H7IdTo"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-194",
  "n": 194,
  "chapter": "Sorting",
  "topic": "[Review] Sorting (playlist) in 18 minutes",
  "title": "Merge sort in 3 minutes (video)",
  "links": [
   {
    "label": "Merge sort in 3 minutes (video)",
    "url": "https://youtu.be/4VqmGXwpLqc"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-195",
  "n": 195,
  "chapter": "Sorting",
  "topic": "[Review] Sorting (playlist) in 18 minutes",
  "title": "Bubble sort in 2 minutes (video)",
  "links": [
   {
    "label": "Bubble sort in 2 minutes (video)",
    "url": "https://youtu.be/xli_FI7CuzA"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-196",
  "n": 196,
  "chapter": "Sorting",
  "topic": "[Review] Sorting (playlist) in 18 minutes",
  "title": "Selection sort in 3 minutes (video)",
  "links": [
   {
    "label": "Selection sort in 3 minutes (video)",
    "url": "https://youtu.be/g-PGLbMth_g"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-197",
  "n": 197,
  "chapter": "Sorting",
  "topic": "[Review] Sorting (playlist) in 18 minutes",
  "title": "Insertion sort in 2 minutes (video)",
  "links": [
   {
    "label": "Insertion sort in 2 minutes (video)",
    "url": "https://youtu.be/JU767SDMDvA"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-198",
  "n": 198,
  "chapter": "Sorting",
  "topic": "",
  "title": "Implement",
  "links": [],
  "depth": 0
 },
 {
  "key": "ciu-199",
  "n": 199,
  "chapter": "Sorting",
  "topic": "Implement",
  "title": "Mergesort: O(n log n) average and worst case",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-200",
  "n": 200,
  "chapter": "Sorting",
  "topic": "Implement",
  "title": "Quicksort O(n log n) average case",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-201",
  "n": 201,
  "chapter": "Sorting",
  "topic": "",
  "title": "Not required, but I recommended them",
  "links": [],
  "depth": 0
 },
 {
  "key": "ciu-202",
  "n": 202,
  "chapter": "Sorting",
  "topic": "Not required, but I recommended them",
  "title": "Sedgewick - Radix Sorts (6 videos)",
  "links": [
   {
    "label": "Sedgewick - Radix Sorts (6 videos)",
    "url": "https://www.coursera.org/learn/algorithms-part2/home/week/3"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-203",
  "n": 203,
  "chapter": "Sorting",
  "topic": "Sedgewick - Radix Sorts (6 videos)",
  "title": "1. Strings in Java",
  "links": [
   {
    "label": "1. Strings in Java",
    "url": "https://www.coursera.org/learn/algorithms-part2/lecture/vGHvb/strings-in-java"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-204",
  "n": 204,
  "chapter": "Sorting",
  "topic": "Sedgewick - Radix Sorts (6 videos)",
  "title": "2. Key Indexed Counting",
  "links": [
   {
    "label": "2. Key Indexed Counting",
    "url": "https://www.coursera.org/lecture/algorithms-part2/key-indexed-counting-2pi1Z"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-205",
  "n": 205,
  "chapter": "Sorting",
  "topic": "Sedgewick - Radix Sorts (6 videos)",
  "title": "3. Least Significant Digit First String Radix Sort",
  "links": [
   {
    "label": "3. Least Significant Digit First String Radix Sort",
    "url": "https://www.coursera.org/learn/algorithms-part2/lecture/c1U7L/lsd-radix-sort"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-206",
  "n": 206,
  "chapter": "Sorting",
  "topic": "Sedgewick - Radix Sorts (6 videos)",
  "title": "4. Most Significant Digit First String Radix Sort",
  "links": [
   {
    "label": "4. Most Significant Digit First String Radix Sort",
    "url": "https://www.coursera.org/learn/algorithms-part2/lecture/gFxwG/msd-radix-sort"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-207",
  "n": 207,
  "chapter": "Sorting",
  "topic": "Sedgewick - Radix Sorts (6 videos)",
  "title": "5. 3 Way Radix Quicksort",
  "links": [
   {
    "label": "5. 3 Way Radix Quicksort",
    "url": "https://www.coursera.org/lecture/algorithms-part2/3-way-radix-quicksort-crkd5"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-208",
  "n": 208,
  "chapter": "Sorting",
  "topic": "Sedgewick - Radix Sorts (6 videos)",
  "title": "6. Suffix Arrays",
  "links": [
   {
    "label": "6. Suffix Arrays",
    "url": "https://www.coursera.org/learn/algorithms-part2/lecture/TH18W/suffix-arrays"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-209",
  "n": 209,
  "chapter": "Sorting",
  "topic": "Not required, but I recommended them",
  "title": "Radix Sort",
  "links": [
   {
    "label": "Radix Sort",
    "url": "http://www.cs.yale.edu/homes/aspnes/classes/223/notes.html#radixSort"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-210",
  "n": 210,
  "chapter": "Sorting",
  "topic": "Not required, but I recommended them",
  "title": "Radix Sort (video)",
  "links": [
   {
    "label": "Radix Sort (video)",
    "url": "https://www.youtube.com/watch?v=xhr26ia4k38"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-211",
  "n": 211,
  "chapter": "Sorting",
  "topic": "Not required, but I recommended them",
  "title": "Radix Sort, Counting Sort (linear time given constraints) (video)",
  "links": [
   {
    "label": "Radix Sort, Counting Sort (linear time given constraints) (video)",
    "url": "https://www.youtube.com/watch?v=Nz1KZXbghj8&index=7&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-212",
  "n": 212,
  "chapter": "Sorting",
  "topic": "Not required, but I recommended them",
  "title": "Randomization: Matrix Multiply, Quicksort, Freivalds' algorithm (video)",
  "links": [
   {
    "label": "Randomization: Matrix Multiply, Quicksort, Freivalds' algorithm (video)",
    "url": "https://www.youtube.com/watch?v=cNB2lADK3_s&index=8&list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-213",
  "n": 213,
  "chapter": "Sorting",
  "topic": "Not required, but I recommended them",
  "title": "Sorting in Linear Time (video)",
  "links": [
   {
    "label": "Sorting in Linear Time (video)",
    "url": "https://www.youtube.com/watch?v=pOKy3RZbSws&list=PLUl4u3cNGP61hsJNdULdudlRL493b-XZf&index=14"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-214",
  "n": 214,
  "chapter": "Graphs",
  "topic": "",
  "title": "MIT(videos)",
  "links": [],
  "depth": 0
 },
 {
  "key": "ciu-215",
  "n": 215,
  "chapter": "Graphs",
  "topic": "MIT(videos)",
  "title": "Breadth-First Search",
  "links": [
   {
    "label": "Breadth-First Search",
    "url": "https://www.youtube.com/watch?v=oFVYVzlvk9c&t=14s&ab_channel=MITOpenCourseWare"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-216",
  "n": 216,
  "chapter": "Graphs",
  "topic": "MIT(videos)",
  "title": "Depth-First Search",
  "links": [
   {
    "label": "Depth-First Search",
    "url": "https://www.youtube.com/watch?v=IBfWDYSffUU&t=32s&ab_channel=MITOpenCourseWare"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-217",
  "n": 217,
  "chapter": "Graphs",
  "topic": "",
  "title": "Skiena Lectures - great intro",
  "links": [],
  "depth": 0
 },
 {
  "key": "ciu-218",
  "n": 218,
  "chapter": "Graphs",
  "topic": "Skiena Lectures - great intro",
  "title": "CSE373 2020 - Lecture 10 - Graph Data Structures (video)",
  "links": [
   {
    "label": "CSE373 2020 - Lecture 10 - Graph Data Structures (video)",
    "url": "https://www.youtube.com/watch?v=Sjk0xqWWPCc&list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&index=10"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-219",
  "n": 219,
  "chapter": "Graphs",
  "topic": "Skiena Lectures - great intro",
  "title": "CSE373 2020 - Lecture 11 - Graph Traversal (video)",
  "links": [
   {
    "label": "CSE373 2020 - Lecture 11 - Graph Traversal (video)",
    "url": "https://www.youtube.com/watch?v=ZTwjXj81NVY&list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&index=11"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-220",
  "n": 220,
  "chapter": "Graphs",
  "topic": "Skiena Lectures - great intro",
  "title": "CSE373 2020 - Lecture 12 - Depth First Search (video)",
  "links": [
   {
    "label": "CSE373 2020 - Lecture 12 - Depth First Search (video)",
    "url": "https://www.youtube.com/watch?v=KyordYB3BOs&list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&index=12"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-221",
  "n": 221,
  "chapter": "Graphs",
  "topic": "Skiena Lectures - great intro",
  "title": "CSE373 2020 - Lecture 13 - Minimum Spanning Trees (video)",
  "links": [
   {
    "label": "CSE373 2020 - Lecture 13 - Minimum Spanning Trees (video)",
    "url": "https://www.youtube.com/watch?v=oolm2VnJUKw&list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&index=13"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-222",
  "n": 222,
  "chapter": "Graphs",
  "topic": "Skiena Lectures - great intro",
  "title": "CSE373 2020 - Lecture 14 - Minimum Spanning Trees (con't) (video)",
  "links": [
   {
    "label": "CSE373 2020 - Lecture 14 - Minimum Spanning Trees (con't) (video)",
    "url": "https://www.youtube.com/watch?v=RktgPx0MarY&list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&index=14"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-223",
  "n": 223,
  "chapter": "Graphs",
  "topic": "Skiena Lectures - great intro",
  "title": "CSE373 2020 - Lecture 15 - Graph Algorithms (con't 2) (video)",
  "links": [
   {
    "label": "CSE373 2020 - Lecture 15 - Graph Algorithms (con't 2) (video)",
    "url": "https://www.youtube.com/watch?v=MUe5DXRhyAo&list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&index=15"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-224",
  "n": 224,
  "chapter": "Graphs",
  "topic": "",
  "title": "Graphs (review and more)",
  "links": [],
  "depth": 0
 },
 {
  "key": "ciu-225",
  "n": 225,
  "chapter": "Graphs",
  "topic": "Graphs (review and more)",
  "title": "6.006 Single-Source Shortest Paths Problem (video)",
  "links": [
   {
    "label": "6.006 Single-Source Shortest Paths Problem (video)",
    "url": "https://www.youtube.com/watch?v=Aa2sqUhIn-E&index=15&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-226",
  "n": 226,
  "chapter": "Graphs",
  "topic": "Graphs (review and more)",
  "title": "6.006 Dijkstra (video)",
  "links": [
   {
    "label": "6.006 Dijkstra (video)",
    "url": "https://www.youtube.com/watch?v=NSHizBK9JD8&t=1731s&ab_channel=MITOpenCourseWare"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-227",
  "n": 227,
  "chapter": "Graphs",
  "topic": "Graphs (review and more)",
  "title": "6.006 Bellman-Ford (video)",
  "links": [
   {
    "label": "6.006 Bellman-Ford (video)",
    "url": "https://www.youtube.com/watch?v=f9cVS_URPc0&ab_channel=MITOpenCourseWare"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-228",
  "n": 228,
  "chapter": "Graphs",
  "topic": "Graphs (review and more)",
  "title": "6.006 Speeding Up Dijkstra (video)",
  "links": [
   {
    "label": "6.006 Speeding Up Dijkstra (video)",
    "url": "https://www.youtube.com/watch?v=CHvQ3q_gJ7E&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb&index=18"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-229",
  "n": 229,
  "chapter": "Graphs",
  "topic": "Graphs (review and more)",
  "title": "Aduni: Graph Algorithms I - Topological Sorting, Minimum Spanning Trees, Prim's Algorithm -  Lecture 6 (video)",
  "links": [
   {
    "label": "Aduni: Graph Algorithms I - Topological Sorting, Minimum Spanning Trees, Prim's Algorithm -  Lecture 6 (video)",
    "url": "https://www.youtube.com/watch?v=i_AQT_XfvD8&index=6&list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-230",
  "n": 230,
  "chapter": "Graphs",
  "topic": "Graphs (review and more)",
  "title": "Aduni: Graph Algorithms II - DFS, BFS, Kruskal's Algorithm, Union Find Data Structure - Lecture 7 (video)",
  "links": [
   {
    "label": "Aduni: Graph Algorithms II - DFS, BFS, Kruskal's Algorithm, Union Find Data Structure - Lecture 7 (video)",
    "url": "https://www.youtube.com/watch?v=ufj5_bppBsA&list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&index=7"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-231",
  "n": 231,
  "chapter": "Graphs",
  "topic": "Graphs (review and more)",
  "title": "Aduni: Graph Algorithms III: Shortest Path - Lecture 8 (video)",
  "links": [
   {
    "label": "Aduni: Graph Algorithms III: Shortest Path - Lecture 8 (video)",
    "url": "https://www.youtube.com/watch?v=DiedsPsMKXc&list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&index=8"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-232",
  "n": 232,
  "chapter": "Graphs",
  "topic": "Graphs (review and more)",
  "title": "Aduni: Graph Alg. IV: Intro to geometric algorithms - Lecture 9 (video)",
  "links": [
   {
    "label": "Aduni: Graph Alg. IV: Intro to geometric algorithms - Lecture 9 (video)",
    "url": "https://www.youtube.com/watch?v=XIAQRlNkJAw&list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&index=9"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-233",
  "n": 233,
  "chapter": "Graphs",
  "topic": "Graphs (review and more)",
  "title": "CS 61B 2014: Weighted graphs (video)",
  "links": [
   {
    "label": "CS 61B 2014: Weighted graphs (video)",
    "url": "https://archive.org/details/ucberkeley_webcast_zFbq8vOZ_0k"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-234",
  "n": 234,
  "chapter": "Graphs",
  "topic": "Graphs (review and more)",
  "title": "Greedy Algorithms: Minimum Spanning Tree (video)",
  "links": [
   {
    "label": "Greedy Algorithms: Minimum Spanning Tree (video)",
    "url": "https://www.youtube.com/watch?v=tKwnms5iRBU&index=16&list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-235",
  "n": 235,
  "chapter": "Graphs",
  "topic": "Graphs (review and more)",
  "title": "Strongly Connected Components Kosaraju's Algorithm Graph Algorithm (video)",
  "links": [
   {
    "label": "Strongly Connected Components Kosaraju's Algorithm Graph Algorithm (video)",
    "url": "https://www.youtube.com/watch?v=RpgcYiky7uw"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-236",
  "n": 236,
  "chapter": "Graphs",
  "topic": "Graphs (review and more)",
  "title": "[Review] Shortest Path Algorithms (playlist) in 16 minutes (video)",
  "links": [
   {
    "label": "[Review] Shortest Path Algorithms (playlist) in 16 minutes (video)",
    "url": "https://www.youtube.com/playlist?list=PL9xmBV_5YoZO-Y-H3xIC9DGSfVYJng9Yw"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-237",
  "n": 237,
  "chapter": "Graphs",
  "topic": "Graphs (review and more)",
  "title": "[Review] Minimum Spanning Trees (playlist) in 4 minutes (video)",
  "links": [
   {
    "label": "[Review] Minimum Spanning Trees (playlist) in 4 minutes (video)",
    "url": "https://www.youtube.com/playlist?list=PL9xmBV_5YoZObEi3Hf6lmyW-CBfs7nkOV"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-238",
  "n": 238,
  "chapter": "Graphs",
  "topic": "Graphs (review and more)",
  "title": "Algorithms on Graphs (video)",
  "links": [
   {
    "label": "Algorithms on Graphs (video)",
    "url": "https://www.coursera.org/learn/algorithms-on-graphs/home/welcome"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-239",
  "n": 239,
  "chapter": "Graphs",
  "topic": "Graphs (review and more)",
  "title": "DFS with adjacency list (recursive)",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-240",
  "n": 240,
  "chapter": "Graphs",
  "topic": "Graphs (review and more)",
  "title": "DFS with adjacency list (iterative with stack)",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-241",
  "n": 241,
  "chapter": "Graphs",
  "topic": "Graphs (review and more)",
  "title": "DFS with adjacency matrix (recursive)",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-242",
  "n": 242,
  "chapter": "Graphs",
  "topic": "Graphs (review and more)",
  "title": "DFS with adjacency matrix (iterative with stack)",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-243",
  "n": 243,
  "chapter": "Graphs",
  "topic": "Graphs (review and more)",
  "title": "BFS with adjacency list",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-244",
  "n": 244,
  "chapter": "Graphs",
  "topic": "Graphs (review and more)",
  "title": "BFS with adjacency matrix",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-245",
  "n": 245,
  "chapter": "Graphs",
  "topic": "Graphs (review and more)",
  "title": "single-source shortest path (Dijkstra)",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-246",
  "n": 246,
  "chapter": "Graphs",
  "topic": "Graphs (review and more)",
  "title": "minimum spanning tree",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-247",
  "n": 247,
  "chapter": "Graphs",
  "topic": "minimum spanning tree",
  "title": "check for a cycle (needed for topological sort, since we'll check for the cycle before starting)",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-248",
  "n": 248,
  "chapter": "Graphs",
  "topic": "minimum spanning tree",
  "title": "topological sort",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-249",
  "n": 249,
  "chapter": "Graphs",
  "topic": "minimum spanning tree",
  "title": "count connected components in a graph",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-250",
  "n": 250,
  "chapter": "Graphs",
  "topic": "minimum spanning tree",
  "title": "list strongly connected components",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-251",
  "n": 251,
  "chapter": "Graphs",
  "topic": "minimum spanning tree",
  "title": "check for bipartite graph",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-252",
  "n": 252,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Stanford lectures on recursion & backtracking",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-253",
  "n": 253,
  "chapter": "Even More Knowledge",
  "topic": "Stanford lectures on recursion & backtracking",
  "title": "Lecture 8 | Programming Abstractions (video)",
  "links": [
   {
    "label": "Lecture 8 | Programming Abstractions (video)",
    "url": "https://www.youtube.com/watch?v=gl3emqCuueQ&list=PLFE6E58F856038C69&index=8"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-254",
  "n": 254,
  "chapter": "Even More Knowledge",
  "topic": "Stanford lectures on recursion & backtracking",
  "title": "Lecture 9 | Programming Abstractions (video)",
  "links": [
   {
    "label": "Lecture 9 | Programming Abstractions (video)",
    "url": "https://www.youtube.com/watch?v=uFJhEPrbycQ&list=PLFE6E58F856038C69&index=9"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-255",
  "n": 255,
  "chapter": "Even More Knowledge",
  "topic": "Stanford lectures on recursion & backtracking",
  "title": "Lecture 10 | Programming Abstractions (video)",
  "links": [
   {
    "label": "Lecture 10 | Programming Abstractions (video)",
    "url": "https://www.youtube.com/watch?v=NdF1QDTRkck&index=10&list=PLFE6E58F856038C69"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-256",
  "n": 256,
  "chapter": "Even More Knowledge",
  "topic": "Stanford lectures on recursion & backtracking",
  "title": "Lecture 11 | Programming Abstractions (video)",
  "links": [
   {
    "label": "Lecture 11 | Programming Abstractions (video)",
    "url": "https://www.youtube.com/watch?v=p-gpaIGRCQI&list=PLFE6E58F856038C69&index=11"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-257",
  "n": 257,
  "chapter": "Even More Knowledge",
  "topic": "Stanford lectures on recursion & backtracking",
  "title": "What Is Tail Recursion Why Is It So Bad?",
  "links": [
   {
    "label": "What Is Tail Recursion Why Is It So Bad?",
    "url": "https://www.quora.com/What-is-tail-recursion-Why-is-it-so-bad"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-258",
  "n": 258,
  "chapter": "Even More Knowledge",
  "topic": "Stanford lectures on recursion & backtracking",
  "title": "Tail Recursion (video)",
  "links": [
   {
    "label": "Tail Recursion (video)",
    "url": "https://www.coursera.org/lecture/programming-languages/tail-recursion-YZic1"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-259",
  "n": 259,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "5 Simple Steps for Solving Any Recursive Problem(video)",
  "links": [
   {
    "label": "5 Simple Steps for Solving Any Recursive Problem(video)",
    "url": "https://youtu.be/ngCos392W4w"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-260",
  "n": 260,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Videos",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-261",
  "n": 261,
  "chapter": "Even More Knowledge",
  "topic": "Videos",
  "title": "Skiena: CSE373 2020 - Lecture 19 - Introduction to Dynamic Programming (video)",
  "links": [
   {
    "label": "Skiena: CSE373 2020 - Lecture 19 - Introduction to Dynamic Programming (video)",
    "url": "https://www.youtube.com/watch?v=wAA0AMfcJHQ&list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&index=18"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-262",
  "n": 262,
  "chapter": "Even More Knowledge",
  "topic": "Videos",
  "title": "Skiena: CSE373 2020 - Lecture 20 - Edit Distance (video)",
  "links": [
   {
    "label": "Skiena: CSE373 2020 - Lecture 20 - Edit Distance (video)",
    "url": "https://www.youtube.com/watch?v=T3A4jlHlhtA&list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&index=19"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-263",
  "n": 263,
  "chapter": "Even More Knowledge",
  "topic": "Videos",
  "title": "Skiena: CSE373 2020 - Lecture 20 - Edit Distance (continued) (video)",
  "links": [
   {
    "label": "Skiena: CSE373 2020 - Lecture 20 - Edit Distance (continued) (video)",
    "url": "https://www.youtube.com/watch?v=iPnPVcZmRbE&list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&index=20"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-264",
  "n": 264,
  "chapter": "Even More Knowledge",
  "topic": "Videos",
  "title": "Skiena: CSE373 2020 - Lecture 21 - Dynamic Programming (video)",
  "links": [
   {
    "label": "Skiena: CSE373 2020 - Lecture 21 - Dynamic Programming (video)",
    "url": "https://www.youtube.com/watch?v=2xPE4Wq8coQ&list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&index=21"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-265",
  "n": 265,
  "chapter": "Even More Knowledge",
  "topic": "Videos",
  "title": "Skiena: CSE373 2020 - Lecture 22 - Dynamic Programming and Review (video)",
  "links": [
   {
    "label": "Skiena: CSE373 2020 - Lecture 22 - Dynamic Programming and Review (video)",
    "url": "https://www.youtube.com/watch?v=Yh3RzqQGsyI&list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&index=22"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-266",
  "n": 266,
  "chapter": "Even More Knowledge",
  "topic": "Videos",
  "title": "Simonson: Dynamic Programming 0 (starts at 59:18) (video)",
  "links": [
   {
    "label": "Simonson: Dynamic Programming 0 (starts at 59:18) (video)",
    "url": "https://youtu.be/J5aJEcOr6Eo?list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&t=3558"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-267",
  "n": 267,
  "chapter": "Even More Knowledge",
  "topic": "Videos",
  "title": "Simonson: Dynamic Programming I - Lecture 11 (video)",
  "links": [
   {
    "label": "Simonson: Dynamic Programming I - Lecture 11 (video)",
    "url": "https://www.youtube.com/watch?v=0EzHjQ_SOeU&index=11&list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-268",
  "n": 268,
  "chapter": "Even More Knowledge",
  "topic": "Videos",
  "title": "Simonson: Dynamic programming II - Lecture 12 (video)",
  "links": [
   {
    "label": "Simonson: Dynamic programming II - Lecture 12 (video)",
    "url": "https://www.youtube.com/watch?v=v1qiRwuJU7g&list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&index=12"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-269",
  "n": 269,
  "chapter": "Even More Knowledge",
  "topic": "Videos",
  "title": "List of individual DP problems (each is short)",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-270",
  "n": 270,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Yale Lecture notes",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-271",
  "n": 271,
  "chapter": "Even More Knowledge",
  "topic": "Yale Lecture notes",
  "title": "Dynamic Programming",
  "links": [
   {
    "label": "Dynamic Programming",
    "url": "http://www.cs.yale.edu/homes/aspnes/classes/223/notes.html#dynamicProgramming"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-272",
  "n": 272,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Coursera",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-273",
  "n": 273,
  "chapter": "Even More Knowledge",
  "topic": "Coursera",
  "title": "The RNA secondary structure problem (video)",
  "links": [
   {
    "label": "The RNA secondary structure problem (video)",
    "url": "https://www.coursera.org/learn/algorithmic-thinking-2/lecture/80RrW/the-rna-secondary-structure-problem"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-274",
  "n": 274,
  "chapter": "Even More Knowledge",
  "topic": "Coursera",
  "title": "A dynamic programming algorithm (video)",
  "links": [
   {
    "label": "A dynamic programming algorithm (video)",
    "url": "https://www.coursera.org/lecture/algorithmic-thinking-2/a-dynamic-programming-algorithm-PSonq"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-275",
  "n": 275,
  "chapter": "Even More Knowledge",
  "topic": "Coursera",
  "title": "Illustrating the DP algorithm (video)",
  "links": [
   {
    "label": "Illustrating the DP algorithm (video)",
    "url": "https://www.coursera.org/lecture/algorithmic-thinking-2/illustrating-the-dp-algorithm-oUEK2"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-276",
  "n": 276,
  "chapter": "Even More Knowledge",
  "topic": "Coursera",
  "title": "Running time of the DP algorithm (video)",
  "links": [
   {
    "label": "Running time of the DP algorithm (video)",
    "url": "https://www.coursera.org/learn/algorithmic-thinking-2/lecture/nfK2r/running-time-of-the-dp-algorithm"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-277",
  "n": 277,
  "chapter": "Even More Knowledge",
  "topic": "Coursera",
  "title": "DP vs. recursive implementation (video)",
  "links": [
   {
    "label": "DP vs. recursive implementation (video)",
    "url": "https://www.coursera.org/learn/algorithmic-thinking-2/lecture/M999a/dp-vs-recursive-implementation"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-278",
  "n": 278,
  "chapter": "Even More Knowledge",
  "topic": "Coursera",
  "title": "Global pairwise sequence alignment (video)",
  "links": [
   {
    "label": "Global pairwise sequence alignment (video)",
    "url": "https://www.coursera.org/lecture/algorithmic-thinking-2/global-pairwise-sequence-alignment-UZ7o6"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-279",
  "n": 279,
  "chapter": "Even More Knowledge",
  "topic": "Coursera",
  "title": "Local pairwise sequence alignment (video)",
  "links": [
   {
    "label": "Local pairwise sequence alignment (video)",
    "url": "https://www.coursera.org/learn/algorithmic-thinking-2/lecture/WnNau/local-pairwise-sequence-alignment"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-280",
  "n": 280,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Quick UML review (video)",
  "links": [
   {
    "label": "Quick UML review (video)",
    "url": "https://www.youtube.com/watch?v=3cmzqZzwNDM&list=PLGLfVvz_LVvQ5G-LdJ8RLqe-ndo7QITYc&index=3"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-281",
  "n": 281,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Learn these patterns",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-282",
  "n": 282,
  "chapter": "Even More Knowledge",
  "topic": "Learn these patterns",
  "title": "strategy",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-283",
  "n": 283,
  "chapter": "Even More Knowledge",
  "topic": "Learn these patterns",
  "title": "singleton",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-284",
  "n": 284,
  "chapter": "Even More Knowledge",
  "topic": "Learn these patterns",
  "title": "adapter",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-285",
  "n": 285,
  "chapter": "Even More Knowledge",
  "topic": "Learn these patterns",
  "title": "prototype",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-286",
  "n": 286,
  "chapter": "Even More Knowledge",
  "topic": "Learn these patterns",
  "title": "decorator",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-287",
  "n": 287,
  "chapter": "Even More Knowledge",
  "topic": "Learn these patterns",
  "title": "visitor",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-288",
  "n": 288,
  "chapter": "Even More Knowledge",
  "topic": "Learn these patterns",
  "title": "factory, abstract factory",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-289",
  "n": 289,
  "chapter": "Even More Knowledge",
  "topic": "Learn these patterns",
  "title": "facade",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-290",
  "n": 290,
  "chapter": "Even More Knowledge",
  "topic": "Learn these patterns",
  "title": "observer",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-291",
  "n": 291,
  "chapter": "Even More Knowledge",
  "topic": "Learn these patterns",
  "title": "proxy",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-292",
  "n": 292,
  "chapter": "Even More Knowledge",
  "topic": "Learn these patterns",
  "title": "delegate",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-293",
  "n": 293,
  "chapter": "Even More Knowledge",
  "topic": "Learn these patterns",
  "title": "command",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-294",
  "n": 294,
  "chapter": "Even More Knowledge",
  "topic": "Learn these patterns",
  "title": "state",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-295",
  "n": 295,
  "chapter": "Even More Knowledge",
  "topic": "Learn these patterns",
  "title": "memento",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-296",
  "n": 296,
  "chapter": "Even More Knowledge",
  "topic": "Learn these patterns",
  "title": "iterator",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-297",
  "n": 297,
  "chapter": "Even More Knowledge",
  "topic": "Learn these patterns",
  "title": "composite",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-298",
  "n": 298,
  "chapter": "Even More Knowledge",
  "topic": "Learn these patterns",
  "title": "flyweight",
  "links": [],
  "depth": 2
 },
 {
  "key": "ciu-299",
  "n": 299,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Series of videos (27 videos)",
  "links": [
   {
    "label": "Series of videos (27 videos)",
    "url": "https://www.youtube.com/playlist?list=PLF206E906175C7E07"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-300",
  "n": 300,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Book: Head First Design Patterns",
  "links": [
   {
    "label": "Book: Head First Design Patterns",
    "url": "https://www.amazon.com/Head-First-Design-Patterns-Freeman/dp/0596007124"
   },
   {
    "label": "Handy reference: 101 Design Patterns & Tips for Developers",
    "url": "https://sourcemaking.com/design-patterns-and-tips"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-301",
  "n": 301,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Math Skills: How to find Factorial, Permutation, and Combination (Choose) (video)",
  "links": [
   {
    "label": "Math Skills: How to find Factorial, Permutation, and Combination (Choose) (video)",
    "url": "https://www.youtube.com/watch?v=8RRo6Ti9d0U"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-302",
  "n": 302,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Make School: Probability (video)",
  "links": [
   {
    "label": "Make School: Probability (video)",
    "url": "https://www.youtube.com/watch?v=sZkAAk9Wwa4"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-303",
  "n": 303,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Make School: More Probability and Markov Chains (video)",
  "links": [
   {
    "label": "Make School: More Probability and Markov Chains (video)",
    "url": "https://www.youtube.com/watch?v=dNaJg-mLobQ"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-304",
  "n": 304,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Khan Academy",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-305",
  "n": 305,
  "chapter": "Even More Knowledge",
  "topic": "Khan Academy",
  "title": "Basic Theoretical Probability",
  "links": [
   {
    "label": "Basic Theoretical Probability",
    "url": "https://www.khanacademy.org/math/probability/probability-and-combinatorics-topic"
   }
  ],
  "depth": 3
 },
 {
  "key": "ciu-306",
  "n": 306,
  "chapter": "Even More Knowledge",
  "topic": "Khan Academy",
  "title": "Probability Explained (video)",
  "links": [
   {
    "label": "Probability Explained (video)",
    "url": "https://www.youtube.com/watch?v=uzkc-qNVoOk&list=PLC58778F28211FA19"
   }
  ],
  "depth": 3
 },
 {
  "key": "ciu-307",
  "n": 307,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Computational Complexity (video)",
  "links": [
   {
    "label": "Computational Complexity (video)",
    "url": "https://www.youtube.com/watch?v=moPtwq_cVH8&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb&index=23"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-308",
  "n": 308,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Simonson",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-309",
  "n": 309,
  "chapter": "Even More Knowledge",
  "topic": "Simonson",
  "title": "Greedy Algs. II & Intro to NP-Completeness (video)",
  "links": [
   {
    "label": "Greedy Algs. II & Intro to NP-Completeness (video)",
    "url": "https://youtu.be/qcGnJ47Smlo?list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&t=2939"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-310",
  "n": 310,
  "chapter": "Even More Knowledge",
  "topic": "Simonson",
  "title": "NP Completeness II & Reductions (video)",
  "links": [
   {
    "label": "NP Completeness II & Reductions (video)",
    "url": "https://www.youtube.com/watch?v=e0tGC6ZQdQE&index=16&list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-311",
  "n": 311,
  "chapter": "Even More Knowledge",
  "topic": "Simonson",
  "title": "NP Completeness III (Video)",
  "links": [
   {
    "label": "NP Completeness III (Video)",
    "url": "https://www.youtube.com/watch?v=fCX1BGT3wjE&index=17&list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-312",
  "n": 312,
  "chapter": "Even More Knowledge",
  "topic": "Simonson",
  "title": "NP Completeness IV (video)",
  "links": [
   {
    "label": "NP Completeness IV (video)",
    "url": "https://www.youtube.com/watch?v=NKLDp3Rch3M&list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&index=18"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-313",
  "n": 313,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Skiena",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-314",
  "n": 314,
  "chapter": "Even More Knowledge",
  "topic": "Skiena",
  "title": "CSE373 2020 - Lecture 23 - NP-Completeness (video)",
  "links": [
   {
    "label": "CSE373 2020 - Lecture 23 - NP-Completeness (video)",
    "url": "https://www.youtube.com/watch?v=ItHp5laE1VE&list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&index=23"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-315",
  "n": 315,
  "chapter": "Even More Knowledge",
  "topic": "Skiena",
  "title": "CSE373 2020 - Lecture 24 - Satisfiability (video)",
  "links": [
   {
    "label": "CSE373 2020 - Lecture 24 - Satisfiability (video)",
    "url": "https://www.youtube.com/watch?v=inaFJeCzGxU&list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&index=24"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-316",
  "n": 316,
  "chapter": "Even More Knowledge",
  "topic": "Skiena",
  "title": "CSE373 2020 - Lecture 25 - More NP-Completeness (video)",
  "links": [
   {
    "label": "CSE373 2020 - Lecture 25 - More NP-Completeness (video)",
    "url": "https://www.youtube.com/watch?v=B-bhKxjZLlc&list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&index=25"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-317",
  "n": 317,
  "chapter": "Even More Knowledge",
  "topic": "Skiena",
  "title": "CSE373 2020 - Lecture 26 - NP-Completeness Challenge (video)",
  "links": [
   {
    "label": "CSE373 2020 - Lecture 26 - NP-Completeness Challenge (video)",
    "url": "https://www.youtube.com/watch?v=_EzetTkG_Cc&list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&index=26"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-318",
  "n": 318,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Complexity: P, NP, NP-completeness, Reductions (video)",
  "links": [
   {
    "label": "Complexity: P, NP, NP-completeness, Reductions (video)",
    "url": "https://www.youtube.com/watch?v=eHZifpgyH_4&list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp&index=22"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-319",
  "n": 319,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Complexity: Approximation Algorithms (video)",
  "links": [
   {
    "label": "Complexity: Approximation Algorithms (video)",
    "url": "https://www.youtube.com/watch?v=MEz1J9wY2iM&list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp&index=24"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-320",
  "n": 320,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Complexity: Fixed-Parameter Algorithms (video)",
  "links": [
   {
    "label": "Complexity: Fixed-Parameter Algorithms (video)",
    "url": "https://www.youtube.com/watch?v=4q-jmGrmxKs&index=25&list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp"
   },
   {
    "label": "Jupyter Notebook",
    "url": "http://nbviewer.jupyter.org/url/norvig.com/ipython/TSP.ipynb"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-321",
  "n": 321,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "How CPU executes a program (video)",
  "links": [
   {
    "label": "How CPU executes a program (video)",
    "url": "https://www.youtube.com/watch?v=XM4lGflQFvA"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-322",
  "n": 322,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "How computers calculate - ALU (video)",
  "links": [
   {
    "label": "How computers calculate - ALU (video)",
    "url": "https://youtu.be/1I5ZMmrOfnA"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-323",
  "n": 323,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Registers and RAM (video)",
  "links": [
   {
    "label": "Registers and RAM (video)",
    "url": "https://youtu.be/fpnE6UAfbtU"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-324",
  "n": 324,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "The Central Processing Unit (CPU) (video)",
  "links": [
   {
    "label": "The Central Processing Unit (CPU) (video)",
    "url": "https://youtu.be/FZGugFqdr60"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-325",
  "n": 325,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Instructions and Programs (video)",
  "links": [
   {
    "label": "Instructions and Programs (video)",
    "url": "https://youtu.be/zltgXvg6r3k"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-326",
  "n": 326,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "LRU cache",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-327",
  "n": 327,
  "chapter": "Even More Knowledge",
  "topic": "LRU cache",
  "title": "The Magic of LRU Cache (100 Days of Google Dev) (video)",
  "links": [
   {
    "label": "The Magic of LRU Cache (100 Days of Google Dev) (video)",
    "url": "https://www.youtube.com/watch?v=R5ON3iwx78M"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-328",
  "n": 328,
  "chapter": "Even More Knowledge",
  "topic": "LRU cache",
  "title": "Implementing LRU (video)",
  "links": [
   {
    "label": "Implementing LRU (video)",
    "url": "https://www.youtube.com/watch?v=bq6N7Ym81iI"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-329",
  "n": 329,
  "chapter": "Even More Knowledge",
  "topic": "LRU cache",
  "title": "LeetCode - 146 LRU Cache (C++) (video)",
  "links": [
   {
    "label": "LeetCode - 146 LRU Cache (C++) (video)",
    "url": "https://www.youtube.com/watch?v=8-FZRAjR7qU"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-330",
  "n": 330,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "CPU cache",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-331",
  "n": 331,
  "chapter": "Even More Knowledge",
  "topic": "CPU cache",
  "title": "MIT 6.004 L15: The Memory Hierarchy (video)",
  "links": [
   {
    "label": "MIT 6.004 L15: The Memory Hierarchy (video)",
    "url": "https://www.youtube.com/watch?v=vjYF_fAZI5E&list=PLrRW1w6CGAcXbMtDFj205vALOGmiRc82-&index=24"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-332",
  "n": 332,
  "chapter": "Even More Knowledge",
  "topic": "CPU cache",
  "title": "MIT 6.004 L16: Cache Issues (video)",
  "links": [
   {
    "label": "MIT 6.004 L16: Cache Issues (video)",
    "url": "https://www.youtube.com/watch?v=ajgC3-pyGlk&index=25&list=PLrRW1w6CGAcXbMtDFj205vALOGmiRc82-"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-333",
  "n": 333,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Computer Science 162 - Operating Systems (25 videos)",
  "links": [
   {
    "label": "Operating Systems and System Programming (video)",
    "url": "https://archive.org/details/ucberkeley-webcast-PL-XXv-cvA_iBDyz-ba4yDskqMDY6A1w_c"
   },
   {
    "label": "What Is The Difference Between A Process And A Thread?",
    "url": "https://www.quora.com/What-is-the-difference-between-a-process-and-a-thread"
   },
   {
    "label": "Paging, segmentation, and virtual memory (video)",
    "url": "https://youtu.be/O4nwUqQodAg"
   },
   {
    "label": "Interrupts (video)",
    "url": "https://youtu.be/iKlAWIKEyuw"
   },
   {
    "label": "How context switching is initiated by the operating system and underlying hardware?",
    "url": "https://www.javatpoint.com/what-is-the-context-switching-in-the-operating-system"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-334",
  "n": 334,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "threads in C++ (series - 10 videos)",
  "links": [
   {
    "label": "threads in C++ (series - 10 videos)",
    "url": "https://www.youtube.com/playlist?list=PL5jc9xFGsL8E12so1wlMS0r0hTQoJL74M"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-335",
  "n": 335,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "CS 377 Spring '14: Operating Systems from University of Massachusetts",
  "links": [
   {
    "label": "CS 377 Spring '14: Operating Systems from University of Massachusetts",
    "url": "https://www.youtube.com/playlist?list=PLacuG5pysFbDQU8kKxbUh4K5c1iL5_k7k"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-336",
  "n": 336,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "concurrency in Python (videos)",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-337",
  "n": 337,
  "chapter": "Even More Knowledge",
  "topic": "concurrency in Python (videos)",
  "title": "Short series on threads",
  "links": [
   {
    "label": "Short series on threads",
    "url": "https://www.youtube.com/playlist?list=PL1H1sBF1VAKVMONJWJkmUh6_p8g4F2oy1"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-338",
  "n": 338,
  "chapter": "Even More Knowledge",
  "topic": "concurrency in Python (videos)",
  "title": "Python Threads",
  "links": [
   {
    "label": "Python Threads",
    "url": "https://www.youtube.com/watch?v=Bs7vPNbB9JM"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-339",
  "n": 339,
  "chapter": "Even More Knowledge",
  "topic": "concurrency in Python (videos)",
  "title": "Understanding the Python GIL (2010)",
  "links": [
   {
    "label": "Understanding the Python GIL (2010)",
    "url": "https://www.youtube.com/watch?v=Obt-vMVdM8s"
   },
   {
    "label": "reference",
    "url": "http://www.dabeaz.com/GIL"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-340",
  "n": 340,
  "chapter": "Even More Knowledge",
  "topic": "concurrency in Python (videos)",
  "title": "David Beazley - Python Concurrency From the Ground Up LIVE! - PyCon 2015",
  "links": [
   {
    "label": "David Beazley - Python Concurrency From the Ground Up LIVE! - PyCon 2015",
    "url": "https://www.youtube.com/watch?v=MCs5OvhV9S4"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-341",
  "n": 341,
  "chapter": "Even More Knowledge",
  "topic": "concurrency in Python (videos)",
  "title": "Keynote David Beazley - Topics of Interest (Python Asyncio)",
  "links": [
   {
    "label": "Keynote David Beazley - Topics of Interest (Python Asyncio)",
    "url": "https://www.youtube.com/watch?v=ZzfHjytDceU"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-342",
  "n": 342,
  "chapter": "Even More Knowledge",
  "topic": "concurrency in Python (videos)",
  "title": "Mutex in Python",
  "links": [
   {
    "label": "Mutex in Python",
    "url": "https://www.youtube.com/watch?v=0zaPs8OtyKY"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-343",
  "n": 343,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Agile Software Testing with James Bach (video)",
  "links": [
   {
    "label": "Agile Software Testing with James Bach (video)",
    "url": "https://www.youtube.com/watch?v=SAhJf36_u5U"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-344",
  "n": 344,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Open Lecture by James Bach on Software Testing (video)",
  "links": [
   {
    "label": "Open Lecture by James Bach on Software Testing (video)",
    "url": "https://www.youtube.com/watch?v=ILkT_HV9DVU"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-345",
  "n": 345,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Steve Freeman - Test-Driven Development (that’s not what we meant) (video)",
  "links": [
   {
    "label": "Steve Freeman - Test-Driven Development (that’s not what we meant) (video)",
    "url": "https://vimeo.com/83960706"
   },
   {
    "label": "slides",
    "url": "http://gotocon.com/dl/goto-berlin-2013/slides/SteveFreeman_TestDrivenDevelopmentThatsNotWhatWeMeant.pdf"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-346",
  "n": 346,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Dependency injection",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-347",
  "n": 347,
  "chapter": "Even More Knowledge",
  "topic": "Dependency injection",
  "title": "video",
  "links": [
   {
    "label": "video",
    "url": "https://www.youtube.com/watch?v=IKD2-MAkXyQ"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-348",
  "n": 348,
  "chapter": "Even More Knowledge",
  "topic": "Dependency injection",
  "title": "Tao Of Testing",
  "links": [
   {
    "label": "Tao Of Testing",
    "url": "http://jasonpolites.github.io/tao-of-testing/ch3-1.1.html"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-349",
  "n": 349,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "How to write tests",
  "links": [
   {
    "label": "How to write tests",
    "url": "http://jasonpolites.github.io/tao-of-testing/ch4-1.1.html"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-350",
  "n": 350,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Sedgewick - Suffix Arrays (video)",
  "links": [
   {
    "label": "Sedgewick - Suffix Arrays (video)",
    "url": "https://www.coursera.org/learn/algorithms-part2/lecture/TH18W/suffix-arrays"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-351",
  "n": 351,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Sedgewick - Substring Search (videos)",
  "links": [
   {
    "label": "Sedgewick - Substring Search (videos)",
    "url": "https://www.coursera.org/learn/algorithms-part2/home/week/4"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-352",
  "n": 352,
  "chapter": "Even More Knowledge",
  "topic": "Sedgewick - Substring Search (videos)",
  "title": "1. Introduction to Substring Search",
  "links": [
   {
    "label": "1. Introduction to Substring Search",
    "url": "https://www.coursera.org/lecture/algorithms-part2/introduction-to-substring-search-n3ZpG"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-353",
  "n": 353,
  "chapter": "Even More Knowledge",
  "topic": "Sedgewick - Substring Search (videos)",
  "title": "2. Brute-Force Substring Search",
  "links": [
   {
    "label": "2. Brute-Force Substring Search",
    "url": "https://www.coursera.org/learn/algorithms-part2/lecture/2Kn5i/brute-force-substring-search"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-354",
  "n": 354,
  "chapter": "Even More Knowledge",
  "topic": "Sedgewick - Substring Search (videos)",
  "title": "3. Knuth-Morris Pratt",
  "links": [
   {
    "label": "3. Knuth-Morris Pratt",
    "url": "https://www.coursera.org/learn/algorithms-part2/lecture/TAtDr/knuth-morris-pratt"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-355",
  "n": 355,
  "chapter": "Even More Knowledge",
  "topic": "Sedgewick - Substring Search (videos)",
  "title": "4. Boyer-Moore",
  "links": [
   {
    "label": "4. Boyer-Moore",
    "url": "https://www.coursera.org/learn/algorithms-part2/lecture/CYxOT/boyer-moore"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-356",
  "n": 356,
  "chapter": "Even More Knowledge",
  "topic": "Sedgewick - Substring Search (videos)",
  "title": "5. Rabin-Karp",
  "links": [
   {
    "label": "5. Rabin-Karp",
    "url": "https://www.coursera.org/lecture/algorithms-part2/rabin-karp-3KiqT"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-357",
  "n": 357,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Search pattern in a text (video)",
  "links": [
   {
    "label": "Search pattern in a text (video)",
    "url": "https://www.coursera.org/learn/data-structures/lecture/tAfHI/search-pattern-in-text"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-358",
  "n": 358,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Sedgewick - Tries (3 videos)",
  "links": [
   {
    "label": "Sedgewick - Tries (3 videos)",
    "url": "https://www.coursera.org/learn/algorithms-part2/home/week/4"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-359",
  "n": 359,
  "chapter": "Even More Knowledge",
  "topic": "Sedgewick - Tries (3 videos)",
  "title": "1. R Way Tries",
  "links": [
   {
    "label": "1. R Way Tries",
    "url": "https://www.coursera.org/learn/algorithms-part2/lecture/CPVdr/r-way-tries"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-360",
  "n": 360,
  "chapter": "Even More Knowledge",
  "topic": "Sedgewick - Tries (3 videos)",
  "title": "2. Ternary Search Tries",
  "links": [
   {
    "label": "2. Ternary Search Tries",
    "url": "https://www.coursera.org/learn/algorithms-part2/lecture/yQM8K/ternary-search-tries"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-361",
  "n": 361,
  "chapter": "Even More Knowledge",
  "topic": "Sedgewick - Tries (3 videos)",
  "title": "3. Character Based Operations",
  "links": [
   {
    "label": "3. Character Based Operations",
    "url": "https://www.coursera.org/learn/algorithms-part2/lecture/jwNmV/character-based-operations"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-362",
  "n": 362,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Notes on Data Structures and Programming Techniques",
  "links": [
   {
    "label": "Notes on Data Structures and Programming Techniques",
    "url": "http://www.cs.yale.edu/homes/aspnes/classes/223/notes.html#Tries"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-363",
  "n": 363,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Short course videos",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-364",
  "n": 364,
  "chapter": "Even More Knowledge",
  "topic": "Short course videos",
  "title": "Introduction To Tries (video)",
  "links": [
   {
    "label": "Introduction To Tries (video)",
    "url": "https://www.coursera.org/learn/data-structures-optimizing-performance/lecture/08Xyf/core-introduction-to-tries"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-365",
  "n": 365,
  "chapter": "Even More Knowledge",
  "topic": "Short course videos",
  "title": "Performance Of Tries (video)",
  "links": [
   {
    "label": "Performance Of Tries (video)",
    "url": "https://www.coursera.org/learn/data-structures-optimizing-performance/lecture/PvlZW/core-performance-of-tries"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-366",
  "n": 366,
  "chapter": "Even More Knowledge",
  "topic": "Short course videos",
  "title": "Implementing A Trie (video)",
  "links": [
   {
    "label": "Implementing A Trie (video)",
    "url": "https://www.coursera.org/learn/data-structures-optimizing-performance/lecture/DFvd3/core-implementing-a-trie"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-367",
  "n": 367,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "The Trie: A Neglected Data Structure",
  "links": [
   {
    "label": "The Trie: A Neglected Data Structure",
    "url": "https://www.toptal.com/java/the-trie-a-neglected-data-structure"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-368",
  "n": 368,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "TopCoder - Using Tries",
  "links": [
   {
    "label": "TopCoder - Using Tries",
    "url": "https://www.topcoder.com/thrive/articles/Using%20Tries"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-369",
  "n": 369,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Stanford Lecture (real-world use case) (video)",
  "links": [
   {
    "label": "Stanford Lecture (real-world use case) (video)",
    "url": "https://www.youtube.com/watch?v=TJ8SkcUSdbU"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-370",
  "n": 370,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "MIT, Advanced Data Structures, Strings (can get pretty obscure about halfway through) (video)",
  "links": [
   {
    "label": "MIT, Advanced Data Structures, Strings (can get pretty obscure about halfway through) (video)",
    "url": "https://www.youtube.com/watch?v=NinWEPPrkDQ&index=16&list=PLUl4u3cNGP61hsJNdULdudlRL493b-XZf"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-371",
  "n": 371,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "simple 8-bit: Representation of Floating Point Numbers - 1 (video - there is an error in calculations - see video description)",
  "links": [
   {
    "label": "Representation of Floating Point Numbers - 1 (video - there is an error in calculations - see video description)",
    "url": "https://www.youtube.com/watch?v=ji3SfClm8TU"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-372",
  "n": 372,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets",
  "links": [
   {
    "label": "The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets",
    "url": "http://www.joelonsoftware.com/articles/Unicode.html"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-373",
  "n": 373,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "What Every Programmer Absolutely, Positively Needs To Know About Encodings And Character Sets To Work With Text",
  "links": [
   {
    "label": "What Every Programmer Absolutely, Positively Needs To Know About Encodings And Character Sets To Work With Text",
    "url": "http://kunststube.net/encoding/"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-374",
  "n": 374,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Big And Little Endian",
  "links": [
   {
    "label": "Big And Little Endian",
    "url": "https://web.archive.org/web/20180107141940/http://www.cs.umd.edu:80/class/sum2003/cmsc311/Notes/Data/endian.html"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-375",
  "n": 375,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Big Endian Vs Little Endian (video)",
  "links": [
   {
    "label": "Big Endian Vs Little Endian (video)",
    "url": "https://www.youtube.com/watch?v=JrNF0KRAlyo"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-376",
  "n": 376,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Big And Little Endian Inside/Out (video)",
  "links": [
   {
    "label": "Big And Little Endian Inside/Out (video)",
    "url": "https://www.youtube.com/watch?v=oBSuXP-1Tc0"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-377",
  "n": 377,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Khan Academy",
  "links": [
   {
    "label": "Khan Academy",
    "url": "https://www.khanacademy.org/computing/code-org/computers-and-the-internet"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-378",
  "n": 378,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "UDP and TCP: Comparison of Transport Protocols (video)",
  "links": [
   {
    "label": "UDP and TCP: Comparison of Transport Protocols (video)",
    "url": "https://www.youtube.com/watch?v=Vdc8TCESIg8"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-379",
  "n": 379,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "TCP/IP and the OSI Model Explained! (video)",
  "links": [
   {
    "label": "TCP/IP and the OSI Model Explained! (video)",
    "url": "https://www.youtube.com/watch?v=e5DEVa9eSN0"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-380",
  "n": 380,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Packet Transmission across the Internet. Networking & TCP/IP tutorial. (video)",
  "links": [
   {
    "label": "Packet Transmission across the Internet. Networking & TCP/IP tutorial. (video)",
    "url": "https://www.youtube.com/watch?v=nomyRJehhnM"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-381",
  "n": 381,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "HTTP (video)",
  "links": [
   {
    "label": "HTTP (video)",
    "url": "https://www.youtube.com/watch?v=WGJrLqtX7As"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-382",
  "n": 382,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "SSL and HTTPS (video)",
  "links": [
   {
    "label": "SSL and HTTPS (video)",
    "url": "https://www.youtube.com/watch?v=S2iBR2ZlZf0"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-383",
  "n": 383,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "SSL/TLS (video)",
  "links": [
   {
    "label": "SSL/TLS (video)",
    "url": "https://www.youtube.com/watch?v=Rp3iZUvXWlM"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-384",
  "n": 384,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "HTTP 2.0 (video)",
  "links": [
   {
    "label": "HTTP 2.0 (video)",
    "url": "https://www.youtube.com/watch?v=E9FxNzv1Tr8"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-385",
  "n": 385,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Video Series (21 videos) (video)",
  "links": [
   {
    "label": "Video Series (21 videos) (video)",
    "url": "https://www.youtube.com/playlist?list=PLEbnTDJUr_IegfoqO4iPnPYQui46QqT0j"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-386",
  "n": 386,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Subnetting Demystified - Part 5 CIDR Notation (video)",
  "links": [
   {
    "label": "Subnetting Demystified - Part 5 CIDR Notation (video)",
    "url": "https://www.youtube.com/watch?v=t5xYI0jzOf4"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-387",
  "n": 387,
  "chapter": "Even More Knowledge",
  "topic": "",
  "title": "Sockets",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-388",
  "n": 388,
  "chapter": "Even More Knowledge",
  "topic": "Sockets",
  "title": "Java - Sockets - Introduction (video)",
  "links": [
   {
    "label": "Java - Sockets - Introduction (video)",
    "url": "https://www.youtube.com/watch?v=6G_W54zuadg&t=6s"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-389",
  "n": 389,
  "chapter": "Even More Knowledge",
  "topic": "Sockets",
  "title": "Socket Programming (video)",
  "links": [
   {
    "label": "Socket Programming (video)",
    "url": "https://www.youtube.com/watch?v=G75vN2mnJeQ"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-390",
  "n": 390,
  "chapter": "Final Review",
  "topic": "",
  "title": "Series of 2-3 minutes short subject videos (23 videos)",
  "links": [
   {
    "label": "Videos",
    "url": "https://www.youtube.com/watch?v=r4r1DZcx1cM&list=PLmVb1OknmNJuC5POdcDv5oCS7_OUkDgpj&index=22"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-391",
  "n": 391,
  "chapter": "Final Review",
  "topic": "",
  "title": "Series of 2-5 minutes short subject videos - Michael Sambol (48 videos)",
  "links": [
   {
    "label": "Videos",
    "url": "https://www.youtube.com/@MichaelSambol"
   },
   {
    "label": "Code Examples",
    "url": "https://github.com/msambol/dsa"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-392",
  "n": 392,
  "chapter": "Final Review",
  "topic": "",
  "title": "Sedgewick Videos - Algorithms I",
  "links": [
   {
    "label": "Sedgewick Videos - Algorithms I",
    "url": "https://www.coursera.org/learn/algorithms-part1"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-393",
  "n": 393,
  "chapter": "Final Review",
  "topic": "",
  "title": "Sedgewick Videos - Algorithms II",
  "links": [
   {
    "label": "Sedgewick Videos - Algorithms II",
    "url": "https://www.coursera.org/learn/algorithms-part2"
   },
   {
    "label": "\"This Is What A GOOD Resume Should Look Like\" by Gayle McDowell (author of Cracking the Coding Interview)",
    "url": "https://www.careercup.com/resume"
   },
   {
    "label": "\"Step-by-step resume guide\" by Tech Interview Handbook",
    "url": "https://www.techinterviewhandbook.org/resume/guide"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-394",
  "n": 394,
  "chapter": "Interview Process & General Interview Prep",
  "topic": "",
  "title": "How to Pass the Engineering Interview in 2021",
  "links": [
   {
    "label": "How to Pass the Engineering Interview in 2021",
    "url": "https://davidbyttow.medium.com/how-to-pass-the-engineering-interview-in-2021-45f1b389a1"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-395",
  "n": 395,
  "chapter": "Interview Process & General Interview Prep",
  "topic": "",
  "title": "Demystifying Tech Recruiting",
  "links": [
   {
    "label": "Demystifying Tech Recruiting",
    "url": "https://www.youtube.com/watch?v=N233T0epWTs"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-396",
  "n": 396,
  "chapter": "Interview Process & General Interview Prep",
  "topic": "",
  "title": "How to Get a Job at the Big 4",
  "links": [],
  "depth": 0
 },
 {
  "key": "ciu-397",
  "n": 397,
  "chapter": "Interview Process & General Interview Prep",
  "topic": "How to Get a Job at the Big 4",
  "title": "How to Get a Job at the Big 4 - Amazon, Facebook, Google & Microsoft (video)",
  "links": [
   {
    "label": "How to Get a Job at the Big 4 - Amazon, Facebook, Google & Microsoft (video)",
    "url": "https://www.youtube.com/watch?v=YJZCUhxNCv8"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-398",
  "n": 398,
  "chapter": "Interview Process & General Interview Prep",
  "topic": "How to Get a Job at the Big 4",
  "title": "How to Get a Job at the Big 4.1 (Follow-up video)",
  "links": [
   {
    "label": "How to Get a Job at the Big 4.1 (Follow-up video)",
    "url": "https://www.youtube.com/watch?v=6790FVXWBw8&feature=youtu.be"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-399",
  "n": 399,
  "chapter": "Interview Process & General Interview Prep",
  "topic": "",
  "title": "Cracking The Coding Interview Set 1",
  "links": [],
  "depth": 0
 },
 {
  "key": "ciu-400",
  "n": 400,
  "chapter": "Interview Process & General Interview Prep",
  "topic": "Cracking The Coding Interview Set 1",
  "title": "Gayle L McDowell - Cracking The Coding Interview (video)",
  "links": [
   {
    "label": "Gayle L McDowell - Cracking The Coding Interview (video)",
    "url": "https://www.youtube.com/watch?v=rEJzOhC5ZtQ"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-401",
  "n": 401,
  "chapter": "Interview Process & General Interview Prep",
  "topic": "Cracking The Coding Interview Set 1",
  "title": "Cracking the Coding Interview with Author Gayle Laakmann McDowell (video)",
  "links": [
   {
    "label": "Cracking the Coding Interview with Author Gayle Laakmann McDowell (video)",
    "url": "https://www.youtube.com/watch?v=aClxtDcdpsQ"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-402",
  "n": 402,
  "chapter": "Interview Process & General Interview Prep",
  "topic": "",
  "title": "Cracking the Facebook Coding Interview",
  "links": [],
  "depth": 0
 },
 {
  "key": "ciu-403",
  "n": 403,
  "chapter": "Interview Process & General Interview Prep",
  "topic": "Cracking the Facebook Coding Interview",
  "title": "The Approach",
  "links": [
   {
    "label": "The Approach",
    "url": "https://www.youtube.com/watch?v=wCl9kvQGHPI"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-404",
  "n": 404,
  "chapter": "Interview Process & General Interview Prep",
  "topic": "Cracking the Facebook Coding Interview",
  "title": "Problem Walkthrough",
  "links": [
   {
    "label": "Problem Walkthrough",
    "url": "https://www.youtube.com/watch?v=4UWDyJq8jZg"
   },
   {
    "label": "Python for Data Structures, Algorithms, and Interviews (paid course)",
    "url": "https://www.udemy.com/python-for-data-structures-algorithms-and-interviews/"
   },
   {
    "label": "Intro to Data Structures and Algorithms using Python (Udacity free course)",
    "url": "https://www.udacity.com/course/data-structures-and-algorithms-in-python--ud513"
   },
   {
    "label": "Data Structures and Algorithms Nanodegree! (Udacity paid Nanodegree)",
    "url": "https://www.udacity.com/course/data-structures-and-algorithms-nanodegree--nd256"
   },
   {
    "label": "Grokking the Behavioral Interview (Educative free course)",
    "url": "https://www.educative.io/courses/grokking-the-behavioral-interview"
   },
   {
    "label": "AlgoMonster (paid course with free content)",
    "url": "https://algo.monster/?utm_campaign=jwasham&utm_medium=referral&utm_content=coding-interview-university&utm_source=github"
   },
   {
    "label": "Gainlo.co: Mock interviewers from big companies",
    "url": "http://www.gainlo.co/#!/"
   },
   {
    "label": "Pramp: Mock interviews from/with peers",
    "url": "https://www.pramp.com/"
   },
   {
    "label": "interviewing.io: Practice mock interview with senior engineers",
    "url": "https://interviewing.io"
   },
   {
    "label": "Meetapro: Mock interviews with top FAANG interviewers",
    "url": "https://meetapro.com/?utm_source=ciu"
   },
   {
    "label": "Hello Interview: Mock Interviews with Expert Coaches and AI",
    "url": "https://www.hellointerview.com/?utm_source=ciu"
   },
   {
    "label": "Codemia: Practice system design problems with AI or community solutions and feedback",
    "url": "https://codemia.io/?utm_source=ciu"
   },
   {
    "label": "The Unix Programming Environment",
    "url": "https://www.amazon.com/dp/013937681X"
   },
   {
    "label": "The Linux Command Line: A Complete Introduction",
    "url": "https://www.amazon.com/dp/1593273894/"
   },
   {
    "label": "TCP/IP Illustrated Series",
    "url": "https://en.wikipedia.org/wiki/TCP/IP_Illustrated"
   },
   {
    "label": "Head First Design Patterns",
    "url": "https://www.amazon.com/gp/product/0596007124/"
   },
   {
    "label": "Design Patterns: Elements of Reusable Object-Oriented Software",
    "url": "https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612"
   },
   {
    "label": "Algorithm Design Manual",
    "url": "http://www.amazon.com/Algorithm-Design-Manual-Steven-Skiena/dp/1849967202"
   },
   {
    "label": "Solutions",
    "url": "https://web.archive.org/web/20150404194210/http://www.algorithm.cs.sunysb.edu/algowiki/index.php/The_Algorithms_Design_Manual_(Second_Edition"
   },
   {
    "label": "Errata",
    "url": "http://www3.cs.stonybrook.edu/~skiena/algorist/book/errata"
   },
   {
    "label": "Algorithm",
    "url": "http://jeffe.cs.illinois.edu/teaching/algorithms/"
   },
   {
    "label": "Write Great Code: Volume 1: Understanding the Machine",
    "url": "https://www.amazon.com/Write-Great-Code-Understanding-Machine/dp/1593270038"
   },
   {
    "label": "HLA",
    "url": "https://en.wikipedia.org/wiki/High_Level_Assembly"
   },
   {
    "label": "Introduction to Algorithms",
    "url": "https://www.amazon.com/Introduction-Algorithms-fourth-Thomas-Cormen/dp/026204630X"
   },
   {
    "label": "Computer Architecture, Sixth Edition: A Quantitative Approach",
    "url": "https://www.amazon.com/dp/0128119055"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-405",
  "n": 405,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "",
  "title": "START HERE: The System Design Primer",
  "links": [
   {
    "label": "The System Design Primer",
    "url": "https://github.com/donnemartin/system-design-primer"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-406",
  "n": 406,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "",
  "title": "System Design from HiredInTech",
  "links": [
   {
    "label": "System Design from HiredInTech",
    "url": "http://www.hiredintech.com/system-design/"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-407",
  "n": 407,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "",
  "title": "How Do I Prepare To Answer Design Questions In A Technical Interview?",
  "links": [
   {
    "label": "How Do I Prepare To Answer Design Questions In A Technical Interview?",
    "url": "https://www.quora.com/How-do-I-prepare-to-answer-design-questions-in-a-technical-interview?redirected_qid=1500023"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-408",
  "n": 408,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "",
  "title": "8 steps guide to ace your system design interview",
  "links": [
   {
    "label": "8 steps guide to ace your system design interview",
    "url": "https://javascript.plainenglish.io/8-steps-guide-to-ace-a-system-design-interview-7a5a797f4d7d"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-409",
  "n": 409,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "",
  "title": "Database Normalization - 1NF, 2NF, 3NF and 4NF (video)",
  "links": [
   {
    "label": "Database Normalization - 1NF, 2NF, 3NF and 4NF (video)",
    "url": "https://www.youtube.com/watch?v=UrYLYV7WSHM"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-410",
  "n": 410,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "",
  "title": "System Design Interview - There are a lot of resources in this one. Look through the articles and examples. I put some of them below",
  "links": [
   {
    "label": "System Design Interview",
    "url": "https://github.com/checkcheckzz/system-design-interview"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-411",
  "n": 411,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "",
  "title": "How to ace a systems design interview",
  "links": [
   {
    "label": "How to ace a systems design interview",
    "url": "https://web.archive.org/web/20120716060051/http://www.palantir.com/2011/10/how-to-rock-a-systems-design-interview/"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-412",
  "n": 412,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "",
  "title": "Numbers Everyone Should Know",
  "links": [
   {
    "label": "Numbers Everyone Should Know",
    "url": "http://everythingisdata.wordpress.com/2009/10/17/numbers-everyone-should-know/"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-413",
  "n": 413,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "",
  "title": "How long does it take to make a context switch?",
  "links": [
   {
    "label": "How long does it take to make a context switch?",
    "url": "http://blog.tsunanet.net/2010/11/how-long-does-it-take-to-make-context.html"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-414",
  "n": 414,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "",
  "title": "Transactions Across Datacenters (video)",
  "links": [
   {
    "label": "Transactions Across Datacenters (video)",
    "url": "https://www.youtube.com/watch?v=srOgpXECblk"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-415",
  "n": 415,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "",
  "title": "A plain English introduction to CAP Theorem",
  "links": [
   {
    "label": "A plain English introduction to CAP Theorem",
    "url": "http://ksat.me/a-plain-english-introduction-to-cap-theorem"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-416",
  "n": 416,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "",
  "title": "MIT 6.824: Distributed Systems, Spring 2020 (20 videos)",
  "links": [
   {
    "label": "MIT 6.824: Distributed Systems, Spring 2020 (20 videos)",
    "url": "https://www.youtube.com/watch?v=cQP8WApzIQQ&list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-417",
  "n": 417,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "",
  "title": "Consensus Algorithms",
  "links": [],
  "depth": 0
 },
 {
  "key": "ciu-418",
  "n": 418,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Consensus Algorithms",
  "title": "Paxos - Paxos Agreement - Computerphile (video)",
  "links": [
   {
    "label": "Paxos Agreement - Computerphile (video)",
    "url": "https://www.youtube.com/watch?v=s8JqcZtvnsM"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-419",
  "n": 419,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Consensus Algorithms",
  "title": "Raft - An Introduction to the Raft Distributed Consensus Algorithm (video)",
  "links": [
   {
    "label": "An Introduction to the Raft Distributed Consensus Algorithm (video)",
    "url": "https://www.youtube.com/watch?v=P9Ydif5_qvE"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-420",
  "n": 420,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Raft - An Introduction to the Raft Distributed Consensus Algorithm (video)",
  "title": "Easy-to-read paper",
  "links": [
   {
    "label": "Easy-to-read paper",
    "url": "https://raft.github.io/"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-421",
  "n": 421,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Raft - An Introduction to the Raft Distributed Consensus Algorithm (video)",
  "title": "Infographic",
  "links": [
   {
    "label": "Infographic",
    "url": "http://thesecretlivesofdata.com/raft/"
   }
  ],
  "depth": 2
 },
 {
  "key": "ciu-422",
  "n": 422,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "",
  "title": "Consistent Hashing",
  "links": [
   {
    "label": "Consistent Hashing",
    "url": "http://www.tom-e-white.com/2007/11/consistent-hashing.html"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-423",
  "n": 423,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "",
  "title": "NoSQL Patterns",
  "links": [
   {
    "label": "NoSQL Patterns",
    "url": "http://horicky.blogspot.com/2009/11/nosql-patterns.html"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-424",
  "n": 424,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "",
  "title": "Scalability",
  "links": [],
  "depth": 0
 },
 {
  "key": "ciu-425",
  "n": 425,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Scalability",
  "title": "Great overview (video)",
  "links": [
   {
    "label": "Great overview (video)",
    "url": "https://www.youtube.com/watch?v=-W9F__D3oY4"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-426",
  "n": 426,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Scalability",
  "title": "Short series",
  "links": [
   {
    "label": "Clones",
    "url": "http://www.lecloud.net/post/7295452622/scalability-for-dummies-part-1-clones"
   },
   {
    "label": "Database",
    "url": "http://www.lecloud.net/post/7994751381/scalability-for-dummies-part-2-database"
   },
   {
    "label": "Cache",
    "url": "http://www.lecloud.net/post/9246290032/scalability-for-dummies-part-3-cache"
   },
   {
    "label": "Asynchronism",
    "url": "http://www.lecloud.net/post/9699762917/scalability-for-dummies-part-4-asynchronism"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-427",
  "n": 427,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Scalability",
  "title": "Scalable Web Architecture and Distributed Systems",
  "links": [
   {
    "label": "Scalable Web Architecture and Distributed Systems",
    "url": "http://www.aosabook.org/en/distsys.html"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-428",
  "n": 428,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Scalability",
  "title": "Fallacies of Distributed Computing Explained",
  "links": [
   {
    "label": "Fallacies of Distributed Computing Explained",
    "url": "https://pages.cs.wisc.edu/~zuyu/files/fallacies.pdf"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-429",
  "n": 429,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Scalability",
  "title": "Jeff Dean - Building Software Systems At Google and Lessons Learned (video)",
  "links": [
   {
    "label": "Jeff Dean - Building Software Systems At Google and Lessons Learned (video)",
    "url": "https://www.youtube.com/watch?v=modXC5IWTJI"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-430",
  "n": 430,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Scalability",
  "title": "Introduction to Architecting Systems for Scale",
  "links": [
   {
    "label": "Introduction to Architecting Systems for Scale",
    "url": "http://lethain.com/introduction-to-architecting-systems-for-scale/"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-431",
  "n": 431,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Scalability",
  "title": "Scaling mobile games to a global audience using App Engine and Cloud Datastore (video)",
  "links": [
   {
    "label": "Scaling mobile games to a global audience using App Engine and Cloud Datastore (video)",
    "url": "https://www.youtube.com/watch?v=9nWyWwY2Onc"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-432",
  "n": 432,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Scalability",
  "title": "How Google Does Planet-Scale Engineering for Planet-Scale Infra (video)",
  "links": [
   {
    "label": "How Google Does Planet-Scale Engineering for Planet-Scale Infra (video)",
    "url": "https://www.youtube.com/watch?v=H4vMcD7zKM0"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-433",
  "n": 433,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Scalability",
  "title": "The Importance of Algorithms",
  "links": [
   {
    "label": "The Importance of Algorithms",
    "url": "https://www.topcoder.com/thrive/articles/The%20Importance%20of%20Algorithms"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-434",
  "n": 434,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Scalability",
  "title": "Sharding",
  "links": [
   {
    "label": "Sharding",
    "url": "http://highscalability.com/blog/2009/8/6/an-unorthodox-approach-to-database-design-the-coming-of-the.html"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-435",
  "n": 435,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Scalability",
  "title": "Engineering for the Long Game - Astrid Atkinson Keynote(video)",
  "links": [
   {
    "label": "Engineering for the Long Game - Astrid Atkinson Keynote(video)",
    "url": "https://www.youtube.com/watch?v=p0jGmgIrf_M&list=PLRXxvay_m8gqVlExPC5DG3TGWJTaBgqSA&index=4"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-436",
  "n": 436,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Scalability",
  "title": "7 Years Of YouTube Scalability Lessons In 30 Minutes",
  "links": [
   {
    "label": "7 Years Of YouTube Scalability Lessons In 30 Minutes",
    "url": "http://highscalability.com/blog/2012/3/26/7-years-of-youtube-scalability-lessons-in-30-minutes.html"
   },
   {
    "label": "video",
    "url": "https://www.youtube.com/watch?v=G-lGCC4KKok"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-437",
  "n": 437,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Scalability",
  "title": "How PayPal Scaled To Billions Of Transactions Daily Using Just 8VMs",
  "links": [
   {
    "label": "How PayPal Scaled To Billions Of Transactions Daily Using Just 8VMs",
    "url": "http://highscalability.com/blog/2016/8/15/how-paypal-scaled-to-billions-of-transactions-daily-using-ju.html"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-438",
  "n": 438,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Scalability",
  "title": "How to Remove Duplicates in Large Datasets",
  "links": [
   {
    "label": "How to Remove Duplicates in Large Datasets",
    "url": "https://blog.clevertap.com/how-to-remove-duplicates-in-large-datasets/"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-439",
  "n": 439,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Scalability",
  "title": "A look inside Etsy's scale and engineering culture with Jon Cowie (video)",
  "links": [
   {
    "label": "A look inside Etsy's scale and engineering culture with Jon Cowie (video)",
    "url": "https://www.youtube.com/watch?v=3vV4YiqKm1o"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-440",
  "n": 440,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Scalability",
  "title": "What Led Amazon to its Own Microservices Architecture",
  "links": [
   {
    "label": "What Led Amazon to its Own Microservices Architecture",
    "url": "http://thenewstack.io/led-amazon-microservices-architecture/"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-441",
  "n": 441,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Scalability",
  "title": "To Compress Or Not To Compress, That Was Uber's Question",
  "links": [
   {
    "label": "To Compress Or Not To Compress, That Was Uber's Question",
    "url": "https://eng.uber.com/trip-data-squeeze/"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-442",
  "n": 442,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Scalability",
  "title": "When Should Approximate Query Processing Be Used?",
  "links": [
   {
    "label": "When Should Approximate Query Processing Be Used?",
    "url": "http://highscalability.com/blog/2016/2/25/when-should-approximate-query-processing-be-used.html"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-443",
  "n": 443,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Scalability",
  "title": "Google's Transition From Single Datacenter To Failover, To A Native Multihomed Architecture",
  "links": [
   {
    "label": "Google's Transition From Single Datacenter To Failover, To A Native Multihomed Architecture",
    "url": "http://highscalability.com/blog/2016/2/23/googles-transition-from-single-datacenter-to-failover-to-a-n.html"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-444",
  "n": 444,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Scalability",
  "title": "The Image Optimization Technology That Serves Millions Of Requests Per Day",
  "links": [
   {
    "label": "The Image Optimization Technology That Serves Millions Of Requests Per Day",
    "url": "http://highscalability.com/blog/2016/6/15/the-image-optimization-technology-that-serves-millions-of-re.html"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-445",
  "n": 445,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Scalability",
  "title": "A Patreon Architecture Short",
  "links": [
   {
    "label": "A Patreon Architecture Short",
    "url": "http://highscalability.com/blog/2016/2/1/a-patreon-architecture-short.html"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-446",
  "n": 446,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Scalability",
  "title": "Tinder: How Does One Of The Largest Recommendation Engines Decide Who You'll See Next?",
  "links": [
   {
    "label": "Tinder: How Does One Of The Largest Recommendation Engines Decide Who You'll See Next?",
    "url": "http://highscalability.com/blog/2016/1/27/tinder-how-does-one-of-the-largest-recommendation-engines-de.html"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-447",
  "n": 447,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Scalability",
  "title": "Design Of A Modern Cache",
  "links": [
   {
    "label": "Design Of A Modern Cache",
    "url": "http://highscalability.com/blog/2016/1/25/design-of-a-modern-cache.html"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-448",
  "n": 448,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Scalability",
  "title": "Live Video Streaming At Facebook Scale",
  "links": [
   {
    "label": "Live Video Streaming At Facebook Scale",
    "url": "http://highscalability.com/blog/2016/1/13/live-video-streaming-at-facebook-scale.html"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-449",
  "n": 449,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Scalability",
  "title": "A Beginner's Guide To Scaling To 11 Million+ Users On Amazon's AWS",
  "links": [
   {
    "label": "A Beginner's Guide To Scaling To 11 Million+ Users On Amazon's AWS",
    "url": "http://highscalability.com/blog/2016/1/11/a-beginners-guide-to-scaling-to-11-million-users-on-amazons.html"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-450",
  "n": 450,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Scalability",
  "title": "A 360 Degree View Of The Entire Netflix Stack",
  "links": [
   {
    "label": "A 360 Degree View Of The Entire Netflix Stack",
    "url": "http://highscalability.com/blog/2015/11/9/a-360-degree-view-of-the-entire-netflix-stack.html"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-451",
  "n": 451,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Scalability",
  "title": "Latency Is Everywhere And It Costs You Sales - How To Crush It",
  "links": [
   {
    "label": "Latency Is Everywhere And It Costs You Sales - How To Crush It",
    "url": "http://highscalability.com/latency-everywhere-and-it-costs-you-sales-how-crush-it"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-452",
  "n": 452,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Scalability",
  "title": "What Powers Instagram: Hundreds of Instances, Dozens of Technologies",
  "links": [
   {
    "label": "What Powers Instagram: Hundreds of Instances, Dozens of Technologies",
    "url": "http://instagram-engineering.tumblr.com/post/13649370142/what-powers-instagram-hundreds-of-instances"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-453",
  "n": 453,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Scalability",
  "title": "Salesforce Architecture - How They Handle 1.3 Billion Transactions A Day",
  "links": [
   {
    "label": "Salesforce Architecture - How They Handle 1.3 Billion Transactions A Day",
    "url": "http://highscalability.com/blog/2013/9/23/salesforce-architecture-how-they-handle-13-billion-transacti.html"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-454",
  "n": 454,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Scalability",
  "title": "ESPN's Architecture At Scale - Operating At 100,000 Duh Nuh Nuhs Per Second",
  "links": [
   {
    "label": "ESPN's Architecture At Scale - Operating At 100,000 Duh Nuh Nuhs Per Second",
    "url": "http://highscalability.com/blog/2013/11/4/espns-architecture-at-scale-operating-at-100000-duh-nuh-nuhs.html"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-455",
  "n": 455,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Scalability",
  "title": "See \"Messaging, Serialization, and Queueing Systems\" way below for info on some of the technologies that can glue services together",
  "links": [],
  "depth": 1
 },
 {
  "key": "ciu-456",
  "n": 456,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "Scalability",
  "title": "Twitter",
  "links": [
   {
    "label": "O'Reilly MySQL CE 2011: Jeremy Cole, \"Big and Small Data at @Twitter\" (video)",
    "url": "https://www.youtube.com/watch?v=5cKTP36HVgI"
   },
   {
    "label": "Timelines at Scale",
    "url": "https://www.infoq.com/presentations/Twitter-Timeline-Scalability"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-457",
  "n": 457,
  "chapter": "System Design, Scalability, Data Handling",
  "topic": "",
  "title": "Practicing the system design process: Here are some ideas to try working through on paper, each with some documentation on how it was handled in the real world",
  "links": [
   {
    "label": "The System Design Primer",
    "url": "https://github.com/donnemartin/system-design-primer"
   },
   {
    "label": "System Design from HiredInTech",
    "url": "http://www.hiredintech.com/system-design/"
   },
   {
    "label": "cheat sheet",
    "url": "https://github.com/jwasham/coding-interview-university/blob/main/extras/cheat%20sheets/system-design.pdf"
   },
   {
    "label": "Design a random unique ID generation system",
    "url": "https://blog.twitter.com/2010/announcing-snowflake"
   },
   {
    "label": "Design a key-value database",
    "url": "http://www.slideshare.net/dvirsky/introduction-to-redis"
   },
   {
    "label": "Design a picture sharing system",
    "url": "http://highscalability.com/blog/2011/12/6/instagram-architecture-14-million-users-terabytes-of-photos.html"
   },
   {
    "label": "Design a recommendation system",
    "url": "http://ijcai13.org/files/tutorial_slides/td3.pdf"
   },
   {
    "label": "Design a URL-shortener system: copied from above",
    "url": "http://www.hiredintech.com/system-design/the-system-design-process/"
   },
   {
    "label": "Design a cache system",
    "url": "https://web.archive.org/web/20220217064329/https://adayinthelifeof.nl/2011/02/06/memcache-internals/"
   },
   {
    "label": "How a Compiler Works in ~1 minute (video)",
    "url": "https://www.youtube.com/watch?v=IhC7sdYe-Jg"
   },
   {
    "label": "Harvard CS50 - Compilers (video)",
    "url": "https://www.youtube.com/watch?v=CSZLNYF4Klo"
   },
   {
    "label": "C++ (video)",
    "url": "https://www.youtube.com/watch?v=twodd1KFfGk"
   },
   {
    "label": "Understanding Compiler Optimization (C++) (video)",
    "url": "https://www.youtube.com/watch?v=FnGCDLhaxKU"
   },
   {
    "label": "Editing With Vim 01 - Installation, Setup, and The Modes (video)",
    "url": "https://www.youtube.com/watch?v=5givLEMcINQ&index=1&list=PL13bz4SHGmRxlZVmWQ9DvXo1fEg4UdGkr"
   },
   {
    "label": "VIM Adventures",
    "url": "http://vim-adventures.com/"
   },
   {
    "label": "The vi/vim editor - Lesson 1",
    "url": "https://www.youtube.com/watch?v=SI8TeVMX8pk"
   },
   {
    "label": "The vi/vim editor - Lesson 2",
    "url": "https://www.youtube.com/watch?v=F3OO7ZIOaJE"
   },
   {
    "label": "The vi/vim editor - Lesson 3",
    "url": "https://www.youtube.com/watch?v=ZYEccA_nMaI"
   },
   {
    "label": "The vi/vim editor - Lesson 4",
    "url": "https://www.youtube.com/watch?v=1lYD5gwgZIA"
   },
   {
    "label": "Using Vi Instead of Emacs",
    "url": "http://www.cs.yale.edu/homes/aspnes/classes/223/notes.html#Using_Vi_instead_of_Emacs"
   },
   {
    "label": "Basics Emacs Tutorial (video)",
    "url": "https://www.youtube.com/watch?v=hbmV1bnQ-i0"
   },
   {
    "label": "Emacs Tutorial (Beginners) -Part 1- File commands, cut/copy/paste, cursor commands",
    "url": "https://www.youtube.com/watch?v=ujODL7MD04Q"
   },
   {
    "label": "Emacs Tutorial (Beginners) -Part 2- Buffer management, search, M-x grep and rgrep modes",
    "url": "https://www.youtube.com/watch?v=XWpsRupJ4II"
   },
   {
    "label": "Emacs Tutorial (Beginners) -Part 3- Expressions, Statements, ~/.emacs file, and packages",
    "url": "https://www.youtube.com/watch?v=paSgzPso-yc"
   },
   {
    "label": "Evil Mode: Or, How I Learned to Stop Worrying and Love Emacs (video)",
    "url": "https://www.youtube.com/watch?v=JWD1Fpdd4Pc"
   },
   {
    "label": "Writing C Programs With Emacs",
    "url": "http://www.cs.yale.edu/homes/aspnes/classes/223/notes.html#Writing_C_programs_with_Emacs"
   },
   {
    "label": "The Absolute Beginner's Guide to Emacs (video by David Wilson)",
    "url": "https://www.youtube.com/watch?v=48JlgiBpw_I&t=0s"
   },
   {
    "label": "The Absolute Beginner's Guide to Emacs (notes by David Wilson)",
    "url": "https://systemcrafters.net/emacs-essentials/absolute-beginners-guide-to-emacs/"
   },
   {
    "label": "strace",
    "url": "https://en.wikipedia.org/wiki/Strace"
   },
   {
    "label": "tcpdump",
    "url": "https://danielmiessler.com/study/tcpdump/"
   },
   {
    "label": "Essential Linux Commands Tutorial",
    "url": "https://labex.io/tutorials/practice-linux-commands-hands-on-labs-398420"
   },
   {
    "label": "DevOps Roadmap",
    "url": "https://roadmap.sh/devops"
   },
   {
    "label": "Khan Academy",
    "url": "https://www.khanacademy.org/computing/computer-science/informationtheory"
   },
   {
    "label": "Core Markov Text Generation",
    "url": "https://www.coursera.org/learn/data-structures-optimizing-performance/lecture/waxgx/core-markov-text-generation"
   },
   {
    "label": "Core Implementing Markov Text Generation",
    "url": "https://www.coursera.org/learn/data-structures-optimizing-performance/lecture/gZhiC/core-implementing-markov-text-generation"
   },
   {
    "label": "Project = Markov Text Generation Walk Through",
    "url": "https://www.coursera.org/learn/data-structures-optimizing-performance/lecture/EUjrq/project-markov-text-generation-walk-through"
   },
   {
    "label": "Intro",
    "url": "https://www.youtube.com/watch?v=q-3BctoUpHE"
   },
   {
    "label": "Parity",
    "url": "https://www.youtube.com/watch?v=DdMcAUlxh1M"
   },
   {
    "label": "Error detection",
    "url": "https://www.youtube.com/watch?v=1A_NcXxdoCc"
   },
   {
    "label": "Error correction",
    "url": "https://www.youtube.com/watch?v=JAMLuxdHH8o"
   },
   {
    "label": "Error Checking",
    "url": "https://www.youtube.com/watch?v=wbH2VxzmoZk"
   },
   {
    "label": "Information Theory, Claude Shannon, Entropy, Redundancy, Data Compression & Bits (video)",
    "url": "https://youtu.be/JnJq3Py0dyM?t=176"
   },
   {
    "label": "Khan Academy Series",
    "url": "https://www.khanacademy.org/computing/computer-science/cryptography"
   },
   {
    "label": "Cryptography: Hash Functions",
    "url": "https://www.youtube.com/watch?v=KqqOXndnvic&list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp&index=30"
   },
   {
    "label": "Cryptography: Encryption",
    "url": "https://www.youtube.com/watch?v=9TNI2wHmaeI&index=31&list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp"
   },
   {
    "label": "Compression",
    "url": "https://www.youtube.com/watch?v=Lto-ajuqW3w"
   },
   {
    "label": "Entropy in Compression",
    "url": "https://www.youtube.com/watch?v=M5c_RFKVkko"
   },
   {
    "label": "Upside Down Trees (Huffman Trees)",
    "url": "https://www.youtube.com/watch?v=umTbivyJoiI"
   },
   {
    "label": "EXTRA BITS/TRITS - Huffman Trees",
    "url": "https://www.youtube.com/watch?v=DV8efuB3h2g"
   },
   {
    "label": "Elegant Compression in Text (The LZ 77 Method)",
    "url": "https://www.youtube.com/watch?v=goOa3DGezUA"
   },
   {
    "label": "Text Compression Meets Probabilities",
    "url": "https://www.youtube.com/watch?v=cCDCfoHTsaU"
   },
   {
    "label": "Compressor Head videos",
    "url": "https://www.youtube.com/playlist?list=PLOU2XLYxmsIJGErt5rrCqaSGTMyyqNt2H"
   },
   {
    "label": "(optional) Google Developers Live: GZIP is not enough!",
    "url": "https://www.youtube.com/watch?v=whGwm0Lky2s"
   },
   {
    "label": "MIT (23 videos)",
    "url": "https://www.youtube.com/playlist?list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnNh"
   },
   {
    "label": "Introduction, Threat Models",
    "url": "https://www.youtube.com/watch?v=GqmQg-cszw4&index=1&list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnNh"
   },
   {
    "label": "Control Hijacking Attacks",
    "url": "https://www.youtube.com/watch?v=6bwzNg5qQ0o&list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnNh&index=2"
   },
   {
    "label": "Buffer Overflow Exploits and Defenses",
    "url": "https://www.youtube.com/watch?v=drQyrzRoRiA&list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnNh&index=3"
   },
   {
    "label": "Privilege Separation",
    "url": "https://www.youtube.com/watch?v=6SIJmoE9L9g&index=4&list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnNh"
   },
   {
    "label": "Capabilities",
    "url": "https://www.youtube.com/watch?v=8VqTSY-11F4&index=5&list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnNh"
   },
   {
    "label": "Sandboxing Native Code",
    "url": "https://www.youtube.com/watch?v=VEV74hwASeU&list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnNh&index=6"
   },
   {
    "label": "Web Security Model",
    "url": "https://www.youtube.com/watch?v=chkFBigodIw&index=7&list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnNh"
   },
   {
    "label": "Securing Web Applications",
    "url": "https://www.youtube.com/watch?v=EBQIGy1ROLY&index=8&list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnNh"
   },
   {
    "label": "Symbolic Execution",
    "url": "https://www.youtube.com/watch?v=yRVZPvHYHzw&index=9&list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnNh"
   },
   {
    "label": "Network Security",
    "url": "https://www.youtube.com/watch?v=SIEVvk3NVuk&index=11&list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnNh"
   },
   {
    "label": "Network Protocols",
    "url": "https://www.youtube.com/watch?v=QOtA76ga_fY&index=12&list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnNh"
   },
   {
    "label": "Side-Channel Attacks",
    "url": "https://www.youtube.com/watch?v=PuVMkSEcPiI&index=15&list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnNh"
   },
   {
    "label": "GC in Python (video)",
    "url": "https://www.youtube.com/watch?v=iHVs_HkjdmI"
   },
   {
    "label": "Deep Dive Java: Garbage Collection is Good!",
    "url": "https://www.infoq.com/presentations/garbage-collection-benefits"
   },
   {
    "label": "Deep Dive Python: Garbage Collection in CPython (video)",
    "url": "https://www.youtube.com/watch?v=P-8Z0-MhdQs&list=PLdzf4Clw0VbOEWOS_sLhT_9zaiQDrS5AR&index=3"
   },
   {
    "label": "Coursera (Scala)",
    "url": "https://www.coursera.org/learn/parprog1/home/week/1"
   },
   {
    "label": "Efficient Python for High-Performance Parallel Computing (video)",
    "url": "https://www.youtube.com/watch?v=uY85GkaYzBk"
   },
   {
    "label": "Thrift",
    "url": "https://thrift.apache.org/"
   },
   {
    "label": "Tutorial",
    "url": "http://thrift-tutorial.readthedocs.io/en/latest/intro.html"
   },
   {
    "label": "Protocol Buffers",
    "url": "https://developers.google.com/protocol-buffers/"
   },
   {
    "label": "Tutorials",
    "url": "https://developers.google.com/protocol-buffers/docs/tutorials"
   },
   {
    "label": "gRPC",
    "url": "http://www.grpc.io/"
   },
   {
    "label": "gRPC 101 for Java Developers (video)",
    "url": "https://www.youtube.com/watch?v=5tmPvSe7xXQ&list=PLcTqM9n_dieN0k1nSeN36Z_ppKnvMJoly&index=1"
   },
   {
    "label": "Redis",
    "url": "http://redis.io/"
   },
   {
    "label": "Tutorial",
    "url": "http://try.redis.io/"
   },
   {
    "label": "Amazon SQS (queue)",
    "url": "https://aws.amazon.com/sqs/"
   },
   {
    "label": "Amazon SNS (pub-sub)",
    "url": "https://aws.amazon.com/sns/"
   },
   {
    "label": "RabbitMQ",
    "url": "https://www.rabbitmq.com/"
   },
   {
    "label": "Get Started",
    "url": "https://www.rabbitmq.com/getstarted.html"
   },
   {
    "label": "Celery",
    "url": "http://www.celeryproject.org/"
   },
   {
    "label": "First Steps With Celery",
    "url": "http://docs.celeryproject.org/en/latest/getting-started/first-steps-with-celery.html"
   },
   {
    "label": "ZeroMQ",
    "url": "http://zeromq.org/"
   },
   {
    "label": "Intro - Read The Manual",
    "url": "http://zeromq.org/intro:read-the-manual"
   },
   {
    "label": "ActiveMQ",
    "url": "http://activemq.apache.org/"
   },
   {
    "label": "Kafka",
    "url": "http://kafka.apache.org/documentation.html#introduction"
   },
   {
    "label": "MessagePack",
    "url": "http://msgpack.org/index.html"
   },
   {
    "label": "Avro",
    "url": "https://avro.apache.org/"
   },
   {
    "label": "A Search Algorithm",
    "url": "https://en.wikipedia.org/wiki/A*_search_algorithm"
   },
   {
    "label": "A* Pathfinding (E01: algorithm explanation) (video)",
    "url": "https://www.youtube.com/watch?v=-L-WgKMFuhE"
   },
   {
    "label": "An Interactive Guide To The Fourier Transform",
    "url": "https://betterexplained.com/articles/an-interactive-guide-to-the-fourier-transform/"
   },
   {
    "label": "What is a Fourier transform? What is it used for?",
    "url": "http://www.askamathematician.com/2012/09/q-what-is-a-fourier-transform-what-is-it-used-for/"
   },
   {
    "label": "What is the Fourier Transform? (video)",
    "url": "https://www.youtube.com/watch?v=Xxut2PN-V8Q"
   },
   {
    "label": "Divide & Conquer: FFT (video)",
    "url": "https://www.youtube.com/watch?v=iTMn0Kt18tg&list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp&index=4"
   },
   {
    "label": "Understanding The FFT",
    "url": "http://jakevdp.github.io/blog/2013/08/28/understanding-the-fft/"
   },
   {
    "label": "Bloom Filters (video)",
    "url": "https://www.youtube.com/watch?v=-SuTGoFYjZs"
   },
   {
    "label": "Bloom Filters | Mining of Massive Datasets | Stanford University (video)",
    "url": "https://www.youtube.com/watch?v=qBTdukbzc78"
   },
   {
    "label": "Tutorial",
    "url": "http://billmill.org/bloomfilter-tutorial/"
   },
   {
    "label": "How To Write A Bloom Filter App",
    "url": "http://blog.michaelschmatz.com/2016/04/11/how-to-write-a-bloom-filter-cpp/"
   },
   {
    "label": "How To Count A Billion Distinct Objects Using Only 1.5KB Of Memory",
    "url": "http://highscalability.com/blog/2012/4/5/big-data-counting-how-to-count-a-billion-distinct-objects-us.html"
   },
   {
    "label": "Simhashing (hopefully) made simple",
    "url": "http://ferd.ca/simhashing-hopefully-made-simple.html"
   },
   {
    "label": "Divide & Conquer: van Emde Boas Trees (video)",
    "url": "https://www.youtube.com/watch?v=hmReJCupbNU&list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp&index=6"
   },
   {
    "label": "MIT Lecture Notes",
    "url": "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2012/lecture-notes/MIT6_046JS12_lec15.pdf"
   },
   {
    "label": "CS 61B Lecture 39: Augmenting Data Structures",
    "url": "https://archive.org/details/ucberkeley_webcast_zksIj9O8_jc"
   },
   {
    "label": "Self-balancing binary search tree",
    "url": "https://en.wikipedia.org/wiki/Self-balancing_binary_search_tree"
   },
   {
    "label": "MIT AVL Trees / AVL Sort (video)",
    "url": "https://www.youtube.com/watch?v=FNeL18KsWPc&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb&index=6"
   },
   {
    "label": "AVL Trees (video)",
    "url": "https://www.coursera.org/learn/data-structures/lecture/Qq5E0/avl-trees"
   },
   {
    "label": "AVL Tree Implementation (video)",
    "url": "https://www.coursera.org/learn/data-structures/lecture/PKEBC/avl-tree-implementation"
   },
   {
    "label": "Split And Merge",
    "url": "https://www.coursera.org/learn/data-structures/lecture/22BgE/split-and-merge"
   },
   {
    "label": "[Review] AVL Trees (playlist) in 19 minutes (video)",
    "url": "https://www.youtube.com/playlist?list=PL9xmBV_5YoZOUFgdIeOPuH6cfSnNRMau-"
   },
   {
    "label": "CS 61B: Splay Trees (video)",
    "url": "https://archive.org/details/ucberkeley_webcast_G5QIXywcJlY"
   },
   {
    "label": "Video",
    "url": "https://www.youtube.com/watch?v=QnPl_Y6EqMo"
   },
   {
    "label": "Aduni - Algorithms - Lecture 4 (link jumps to the starting point) (video)",
    "url": "https://youtu.be/1W3x0f_RmUo?list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&t=3871"
   },
   {
    "label": "Aduni - Algorithms - Lecture 5 (video)",
    "url": "https://www.youtube.com/watch?v=hm2GHwyKF1o&list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&index=5"
   },
   {
    "label": "Red-Black Tree",
    "url": "https://en.wikipedia.org/wiki/Red%E2%80%93black_tree"
   },
   {
    "label": "An Introduction To Binary Search And Red Black Tree",
    "url": "https://www.topcoder.com/thrive/articles/An%20Introduction%20to%20Binary%20Search%20and%20Red-Black%20Trees"
   },
   {
    "label": "[Review] Red-Black Trees (playlist) in 30 minutes (video)",
    "url": "https://www.youtube.com/playlist?list=PL9xmBV_5YoZNqDI8qfOZgzbqahCUmUEin"
   },
   {
    "label": "23-Tree Intuition and Definition (video)",
    "url": "https://www.youtube.com/watch?v=C3SsdUqasD4&list=PLA5Lqm4uh9Bbq-E0ZnqTIa8LRaL77ica6&index=2"
   },
   {
    "label": "Binary View of 23-Tree",
    "url": "https://www.youtube.com/watch?v=iYvBtGKsqSg&index=3&list=PLA5Lqm4uh9Bbq-E0ZnqTIa8LRaL77ica6"
   },
   {
    "label": "2-3 Trees (student recitation) (video)",
    "url": "https://www.youtube.com/watch?v=TOb1tuEZ2X4&index=5&list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp"
   },
   {
    "label": "CS 61B Lecture 26: Balanced Search Trees (video)",
    "url": "https://archive.org/details/ucberkeley_webcast_zqrqYXkth6Q"
   },
   {
    "label": "Bottom Up 234-Trees (video)",
    "url": "https://www.youtube.com/watch?v=DQdMYevEyE4&index=4&list=PLA5Lqm4uh9Bbq-E0ZnqTIa8LRaL77ica6"
   },
   {
    "label": "Top Down 234-Trees (video)",
    "url": "https://www.youtube.com/watch?v=2679VQ26Fp4&list=PLA5Lqm4uh9Bbq-E0ZnqTIa8LRaL77ica6&index=5"
   },
   {
    "label": "K-Ary Tree",
    "url": "https://en.wikipedia.org/wiki/K-ary_tree"
   },
   {
    "label": "B-Tree",
    "url": "https://en.wikipedia.org/wiki/B-tree"
   },
   {
    "label": "B-Tree Datastructure",
    "url": "http://btechsmartclass.com/data_structures/b-trees.html"
   },
   {
    "label": "Introduction to B-Trees (video)",
    "url": "https://www.youtube.com/watch?v=I22wEC1tTGo&list=PLA5Lqm4uh9Bbq-E0ZnqTIa8LRaL77ica6&index=6"
   },
   {
    "label": "B-Tree Definition and Insertion (video)",
    "url": "https://www.youtube.com/watch?v=s3bCdZGrgpA&index=7&list=PLA5Lqm4uh9Bbq-E0ZnqTIa8LRaL77ica6"
   },
   {
    "label": "B-Tree Deletion (video)",
    "url": "https://www.youtube.com/watch?v=svfnVhJOfMc&index=8&list=PLA5Lqm4uh9Bbq-E0ZnqTIa8LRaL77ica6"
   },
   {
    "label": "MIT 6.851 - Memory Hierarchy Models (video)",
    "url": "https://www.youtube.com/watch?v=V3omVLzI0WE&index=7&list=PLUl4u3cNGP61hsJNdULdudlRL493b-XZf"
   },
   {
    "label": "[Review] B-Trees (playlist) in 26 minutes (video)",
    "url": "https://www.youtube.com/playlist?list=PL9xmBV_5YoZNFPPv98DjTdD9X6UI9KMHz"
   },
   {
    "label": "kNN K-d tree algorithm (video)",
    "url": "https://www.youtube.com/watch?v=Y4ZgLlDfKDg"
   },
   {
    "label": "Randomization: Skip Lists (video)",
    "url": "https://www.youtube.com/watch?v=2g9OSRKJuzM&index=10&list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp"
   },
   {
    "label": "For animations and a little more detail",
    "url": "https://en.wikipedia.org/wiki/Skip_list"
   },
   {
    "label": "Ford-Fulkerson in 5 minutes — Step by step example (video)",
    "url": "https://www.youtube.com/watch?v=Tl90tNtKvxs"
   },
   {
    "label": "Ford-Fulkerson Algorithm (video)",
    "url": "https://www.youtube.com/watch?v=v1VgJmkEJW0"
   },
   {
    "label": "Network Flows (video)",
    "url": "https://www.youtube.com/watch?v=2vhN4Ice5jI"
   },
   {
    "label": "UCB 61B - Disjoint Sets; Sorting & selection (video)",
    "url": "https://archive.org/details/ucberkeley_webcast_MAEGXTwmUsI"
   },
   {
    "label": "Sedgewick Algorithms - Union-Find (6 videos)",
    "url": "https://www.coursera.org/learn/algorithms-part1/home/week/1"
   },
   {
    "label": "Integer Arithmetic, Karatsuba Multiplication (video)",
    "url": "https://www.youtube.com/watch?v=eCaXlAaN2uE&index=11&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb"
   },
   {
    "label": "The Chinese Remainder Theorem (used in cryptography) (video)",
    "url": "https://www.youtube.com/watch?v=ru7mWZJlRQg"
   },
   {
    "label": "Treap",
    "url": "https://en.wikipedia.org/wiki/Treap"
   },
   {
    "label": "Data Structures: Treaps explained (video)",
    "url": "https://www.youtube.com/watch?v=6podLUYinH8"
   },
   {
    "label": "Applications in set operations",
    "url": "https://www.cs.cmu.edu/~scandal/papers/treaps-spaa98.pdf"
   },
   {
    "label": "Linear Programming",
    "url": "https://www.youtube.com/watch?v=M4K6HYLHREQ"
   },
   {
    "label": "Finding minimum cost",
    "url": "https://www.youtube.com/watch?v=2ACJ9ewUC6U"
   },
   {
    "label": "Finding maximum value",
    "url": "https://www.youtube.com/watch?v=8AA_81xI3ik"
   },
   {
    "label": "Solve Linear Equations with Python - Simplex Algorithm",
    "url": "https://www.youtube.com/watch?v=44pAWI7v5Zk"
   },
   {
    "label": "Graph Alg. IV: Intro to geometric algorithms - Lecture 9",
    "url": "https://youtu.be/XIAQRlNkJAw?list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&t=3164"
   },
   {
    "label": "Geometric Algorithms: Graham & Jarvis - Lecture 10",
    "url": "https://www.youtube.com/watch?v=J5aJEcOr6Eo&index=10&list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm"
   },
   {
    "label": "Divide & Conquer: Convex Hull, Median Finding",
    "url": "https://www.youtube.com/watch?v=EzeYI7p9MjU&list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp&index=2"
   },
   {
    "label": "Computer Science 70, 001 - Spring 2015 - Discrete Mathematics and Probability Theory",
    "url": "http://www.infocobuild.com/education/audio-video-courses/computer-science/cs70-spring2015-berkeley.html"
   },
   {
    "label": "Discrete Mathematics by Shai Simonson (19 videos)",
    "url": "https://www.youtube.com/playlist?list=PLWX710qNZo_sNlSWRMVIh6kfTjolNaZ8t"
   },
   {
    "label": "Discrete Mathematics By IIT Ropar NPTEL",
    "url": "https://nptel.ac.in/courses/106/106/106106183/"
   }
  ],
  "depth": 0
 },
 {
  "key": "ciu-458",
  "n": 458,
  "chapter": "Additional Detail on Some Subjects",
  "topic": "",
  "title": "Bob Martin SOLID Principles of Object Oriented and Agile Design (video)",
  "links": [
   {
    "label": "Bob Martin SOLID Principles of Object Oriented and Agile Design (video)",
    "url": "https://www.youtube.com/watch?v=TMuno5RZNeE"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-459",
  "n": 459,
  "chapter": "Additional Detail on Some Subjects",
  "topic": "",
  "title": "S - Single Responsibility Principle | Single responsibility to each Object",
  "links": [
   {
    "label": "Single Responsibility Principle",
    "url": "http://www.oodesign.com/single-responsibility-principle.html"
   },
   {
    "label": "Single responsibility to each Object",
    "url": "http://www.javacodegeeks.com/2011/11/solid-single-responsibility-principle.html"
   },
   {
    "label": "more flavor",
    "url": "https://docs.google.com/open?id=0ByOwmqah_nuGNHEtcU5OekdDMkk"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-460",
  "n": 460,
  "chapter": "Additional Detail on Some Subjects",
  "topic": "",
  "title": "O - Open/Closed Principle  | On production level Objects are ready for extension but not for modification",
  "links": [
   {
    "label": "Open/Closed Principle",
    "url": "http://www.oodesign.com/open-close-principle.html"
   },
   {
    "label": "On production level Objects are ready for extension but not for modification",
    "url": "https://en.wikipedia.org/wiki/Open/closed_principle"
   },
   {
    "label": "more flavor",
    "url": "http://docs.google.com/a/cleancoder.com/viewer?a=v&pid=explorer&chrome=true&srcid=0BwhCYaYDn8EgN2M5MTkwM2EtNWFkZC00ZTI3LWFjZTUtNTFhZGZiYmUzODc1&hl=en"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-461",
  "n": 461,
  "chapter": "Additional Detail on Some Subjects",
  "topic": "",
  "title": "L - Liskov Substitution Principle | Base Class and Derived class follow ‘IS A’ Principle",
  "links": [
   {
    "label": "Liskov Substitution Principle",
    "url": "http://www.oodesign.com/liskov-s-substitution-principle.html"
   },
   {
    "label": "Base Class and Derived class follow ‘IS A’ Principle",
    "url": "http://stackoverflow.com/questions/56860/what-is-the-liskov-substitution-principle"
   },
   {
    "label": "more flavor",
    "url": "http://docs.google.com/a/cleancoder.com/viewer?a=v&pid=explorer&chrome=true&srcid=0BwhCYaYDn8EgNzAzZjA5ZmItNjU3NS00MzQ5LTkwYjMtMDJhNDU5ZTM0MTlh&hl=en"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-462",
  "n": 462,
  "chapter": "Additional Detail on Some Subjects",
  "topic": "",
  "title": "I - Interface segregation principle | Clients should not be forced to implement interfaces they don't use",
  "links": [
   {
    "label": "Interface segregation principle",
    "url": "http://www.oodesign.com/interface-segregation-principle.html"
   },
   {
    "label": "Interface Segregation Principle in 5 minutes (video)",
    "url": "https://www.youtube.com/watch?v=3CtAfl7aXAQ"
   },
   {
    "label": "more flavor",
    "url": "http://docs.google.com/a/cleancoder.com/viewer?a=v&pid=explorer&chrome=true&srcid=0BwhCYaYDn8EgOTViYjJhYzMtMzYxMC00MzFjLWJjMzYtOGJiMDc5N2JkYmJi&hl=en"
   }
  ],
  "depth": 1
 },
 {
  "key": "ciu-463",
  "n": 463,
  "chapter": "Additional Detail on Some Subjects",
  "topic": "",
  "title": "D -Dependency Inversion principle | Reduce the dependency In composition of objects.",
  "links": [
   {
    "label": "Dependency Inversion principle",
    "url": "http://www.oodesign.com/dependency-inversion-principle.html"
   },
   {
    "label": "Why Is The Dependency Inversion Principle And Why Is It Important",
    "url": "http://stackoverflow.com/questions/62539/what-is-the-dependency-inversion-principle-and-why-is-it-important"
   },
   {
    "label": "more flavor",
    "url": "http://docs.google.com/a/cleancoder.com/viewer?a=v&pid=explorer&chrome=true&srcid=0BwhCYaYDn8EgMjdlMWIzNGUtZTQ0NC00ZjQ5LTkwYzQtZjRhMDRlNTQ3ZGMz&hl=en"
   },
   {
    "label": "Overview",
    "url": "https://www.coursera.org/learn/data-structures/lecture/JssSY/overview"
   },
   {
    "label": "Naive Implementation",
    "url": "https://www.coursera.org/learn/data-structures/lecture/EM5D0/naive-implementations"
   },
   {
    "label": "Trees",
    "url": "https://www.coursera.org/learn/data-structures/lecture/Mxu0w/trees"
   },
   {
    "label": "Union By Rank",
    "url": "https://www.coursera.org/learn/data-structures/lecture/qb4c2/union-by-rank"
   },
   {
    "label": "Path Compression",
    "url": "https://www.coursera.org/learn/data-structures/lecture/Q9CVI/path-compression"
   },
   {
    "label": "Analysis Options",
    "url": "https://www.coursera.org/learn/data-structures/lecture/GQQLN/analysis-optional"
   },
   {
    "label": "6.006: Dynamic Programming I: Fibonacci, Shortest Paths",
    "url": "https://www.youtube.com/watch?v=r4-cftqTcdI&ab_channel=MITOpenCourseWare"
   },
   {
    "label": "6.006: Dynamic Programming II: Text Justification, Blackjack",
    "url": "https://www.youtube.com/watch?v=KLBCUx1is2c&ab_channel=MITOpenCourseWare"
   },
   {
    "label": "6.006: DP III: Parenthesization, Edit Distance, Knapsack",
    "url": "https://www.youtube.com/watch?v=TDo3r5M1LNo&ab_channel=MITOpenCourseWare"
   },
   {
    "label": "6.006: DP IV: Guitar Fingering, Tetris, Super Mario Bros.",
    "url": "https://www.youtube.com/watch?v=i9OAOk0CUQE&ab_channel=MITOpenCourseWare"
   },
   {
    "label": "6.046: Dynamic Programming & Advanced DP",
    "url": "https://www.youtube.com/watch?v=Tw1k46ywN6E&index=14&list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp"
   },
   {
    "label": "6.046: Dynamic Programming: All-Pairs Shortest Paths",
    "url": "https://www.youtube.com/watch?v=NzgFUwOaoIw&list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp&index=15"
   },
   {
    "label": "6.046: Dynamic Programming (student recitation)",
    "url": "https://www.youtube.com/watch?v=krZI60lKPek&list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp&index=12"
   },
   {
    "label": "Synchronous Distributed Algorithms: Symmetry-Breaking. Shortest-Paths Spanning Trees",
    "url": "https://www.youtube.com/watch?v=mUBmcbbJNf4&list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp&index=27"
   },
   {
    "label": "Asynchronous Distributed Algorithms: Shortest-Paths Spanning Trees",
    "url": "https://www.youtube.com/watch?v=kQ-UQAzcnzA&list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp&index=28"
   },
   {
    "label": "MIT 6.042J - Probability Introduction",
    "url": "https://www.youtube.com/watch?v=SmFwFdESMHI&index=18&list=PLB7540DEDD482705B"
   },
   {
    "label": "MIT 6.042J - Conditional Probability",
    "url": "https://www.youtube.com/watch?v=E6FbvM-FGZ8&index=19&list=PLB7540DEDD482705B"
   },
   {
    "label": "MIT 6.042J - Independence",
    "url": "https://www.youtube.com/watch?v=l1BCv3qqW4A&index=20&list=PLB7540DEDD482705B"
   },
   {
    "label": "MIT 6.042J - Random Variables",
    "url": "https://www.youtube.com/watch?v=MOfhhFaQdjw&list=PLB7540DEDD482705B&index=21"
   },
   {
    "label": "MIT 6.042J - Expectation I",
    "url": "https://www.youtube.com/watch?v=gGlMSe7uEkA&index=22&list=PLB7540DEDD482705B"
   },
   {
    "label": "MIT 6.042J - Expectation II",
    "url": "https://www.youtube.com/watch?v=oI9fMUqgfxY&index=23&list=PLB7540DEDD482705B"
   },
   {
    "label": "MIT 6.042J - Large Deviations",
    "url": "https://www.youtube.com/watch?v=q4mwO2qS2z4&index=24&list=PLB7540DEDD482705B"
   },
   {
    "label": "MIT 6.042J - Random Walks",
    "url": "https://www.youtube.com/watch?v=56iFMY8QW2k&list=PLB7540DEDD482705B&index=25"
   },
   {
    "label": "Simonson: Approximation Algorithms (video)",
    "url": "https://www.youtube.com/watch?v=oDniZCmNmNw&list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&index=19"
   },
   {
    "label": "Rabin Karps Algorithm",
    "url": "https://www.coursera.org/lecture/data-structures/rabin-karps-algorithm-c0Qkw"
   },
   {
    "label": "Precomputing",
    "url": "https://www.coursera.org/learn/data-structures/lecture/nYrc8/optimization-precomputation"
   },
   {
    "label": "Optimization: Implementation and Analysis",
    "url": "https://www.coursera.org/learn/data-structures/lecture/h4ZLc/optimization-implementation-and-analysis"
   },
   {
    "label": "Table Doubling, Karp-Rabin",
    "url": "https://www.youtube.com/watch?v=BRO7mVIFt08&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb&index=9"
   },
   {
    "label": "Rolling Hashes, Amortized Analysis",
    "url": "https://www.youtube.com/watch?v=w6nuXg0BISo&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb&index=32"
   },
   {
    "label": "TThe Knuth-Morris-Pratt (KMP) String Matching Algorithm",
    "url": "https://www.youtube.com/watch?v=5i7oKodCRJo"
   },
   {
    "label": "Boyer-Moore String Search Algorithm",
    "url": "https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_string_search_algorithm"
   },
   {
    "label": "Advanced String Searching Boyer-Moore-Horspool Algorithms (video)",
    "url": "https://www.youtube.com/watch?v=QDZpzctPf10"
   },
   {
    "label": "Coursera: Algorithms on Strings",
    "url": "https://www.coursera.org/learn/algorithms-on-strings/home/week/1"
   },
   {
    "label": "Lecture 15 | Programming Abstractions (video)",
    "url": "https://www.youtube.com/watch?v=ENp00xylP7c&index=15&list=PLFE6E58F856038C69"
   },
   {
    "label": "Lecture 16 | Programming Abstractions (video)",
    "url": "https://www.youtube.com/watch?v=y4M9IVgrVKo&index=16&list=PLFE6E58F856038C69"
   },
   {
    "label": "Algorithms - Sorting - Lecture 2 (video)",
    "url": "https://www.youtube.com/watch?v=odNJmw5TOEE&list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&index=2"
   },
   {
    "label": "Algorithms - Sorting II - Lecture 3 (video)",
    "url": "https://www.youtube.com/watch?v=hj8YKFTFKEE&list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&index=3"
   },
   {
    "label": "CSE373 2020 - Mergesort/Quicksort (video)",
    "url": "https://www.youtube.com/watch?v=jUf-UQ3a0kg&list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&index=8"
   },
   {
    "label": "CSE373 2020 - Linear Sorting (video)",
    "url": "https://www.youtube.com/watch?v=0ksyQKmre84&list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&index=9"
   },
   {
    "label": "Build a Modern Computer from First Principles",
    "url": "https://www.coursera.org/learn/build-a-computer"
   },
   {
    "label": "List of individual Dynamic Programming problems (each is short)",
    "url": "https://www.youtube.com/playlist?list=PLrmLmBdmIlpsHaNTPP_jHHDx_os9ItYXr"
   },
   {
    "label": "x86 Architecture, Assembly, Applications (11 videos)",
    "url": "https://www.youtube.com/playlist?list=PL038BE01D3BAEFDB0"
   },
   {
    "label": "MIT 18.06 Linear Algebra, Spring 2005 (35 videos)",
    "url": "https://www.youtube.com/playlist?list=PLE7DDD91010BC51F8"
   },
   {
    "label": "Excellent - MIT Calculus Revisited: Single Variable Calculus",
    "url": "https://www.youtube.com/playlist?list=PL3B08AE665AB9002A"
   },
   {
    "label": "Skiena lectures from Algorithm Design Manual - CSE373 2020 - Analysis of Algorithms (26 videos)",
    "url": "https://www.youtube.com/watch?v=22hwcnXIGgk&list=PLOtl7M3yp-DX6ic0HGT0PUX_wiNmkWkXx&index=1"
   },
   {
    "label": "UC Berkeley 61B (Spring 2014): Data Structures (25 videos)",
    "url": "https://archive.org/details/ucberkeley-webcast-PL-XXv-cvA_iAlnI-BQr9hjqADPBtujFJd"
   },
   {
    "label": "UC Berkeley 61B (Fall 2006): Data Structures (39 videos)",
    "url": "https://archive.org/details/ucberkeley-webcast-PL4BBB74C7D2A1049C"
   },
   {
    "label": "UC Berkeley 61C: Machine Structures (26 videos)",
    "url": "https://archive.org/details/ucberkeley-webcast-PL-XXv-cvA_iCl2-D-FS5mk0jFF6cYSJs_"
   },
   {
    "label": "OOSE: Software Dev Using UML and Java (21 videos)",
    "url": "https://www.youtube.com/playlist?list=PLJ9pm_Rc9HesnkwKlal_buSIHA-jTZMpO"
   },
   {
    "label": "MIT 6.004: Computation Structures (49 videos)",
    "url": "https://www.youtube.com/playlist?list=PLDSlqjcPpoL64CJdF0Qee5oWqGS6we_Yu"
   },
   {
    "label": "Carnegie Mellon - Computer Architecture Lectures (39 videos)",
    "url": "https://www.youtube.com/playlist?list=PL5PHm2jkkXmi5CxxI7b3JCL1TWybTDtKq"
   },
   {
    "label": "MIT 6.006: Intro to Algorithms (47 videos)",
    "url": "https://www.youtube.com/watch?v=HtSuA80QTyo&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb&nohtml5=False"
   },
   {
    "label": "MIT 6.033: Computer System Engineering (22 videos)",
    "url": "https://www.youtube.com/watch?v=zm2VP0kHl1M&list=PL6535748F59DCA484"
   },
   {
    "label": "MIT 6.034 Artificial Intelligence, Fall 2010 (30 videos)",
    "url": "https://www.youtube.com/playlist?list=PLUl4u3cNGP63gFHB6xb-kVBiQHYe_4hSi"
   },
   {
    "label": "MIT 6.042J: Mathematics for Computer Science, Fall 2010 (25 videos)",
    "url": "https://www.youtube.com/watch?v=L3LMbpZIKhQ&list=PLB7540DEDD482705B"
   },
   {
    "label": "MIT 6.046: Design and Analysis of Algorithms (34 videos)",
    "url": "https://www.youtube.com/watch?v=2P-yW7LQr08&list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp"
   },
   {
    "label": "MIT 6.824: Distributed Systems, Spring 2020 (20 videos)",
    "url": "https://www.youtube.com/watch?v=cQP8WApzIQQ&list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB"
   },
   {
    "label": "MIT 6.851: Advanced Data Structures (22 videos)",
    "url": "https://www.youtube.com/watch?v=T0yzrZL1py0&list=PLUl4u3cNGP61hsJNdULdudlRL493b-XZf&index=1"
   },
   {
    "label": "MIT 6.854: Advanced Algorithms, Spring 2016 (24 videos)",
    "url": "https://www.youtube.com/playlist?list=PL6ogFv-ieghdoGKGg2Bik3Gl1glBTEu8c"
   },
   {
    "label": "Harvard COMPSCI 224: Advanced Algorithms (25 videos)",
    "url": "https://www.youtube.com/playlist?list=PL2SOU6wwxB0uP4rJgf5ayhHWgw7akUWSf"
   },
   {
    "label": "MIT 6.858 Computer Systems Security, Fall 2014",
    "url": "https://www.youtube.com/watch?v=GqmQg-cszw4&index=1&list=PLUl4u3cNGP62K2DjQLRxDNRi0z2IRWnNh"
   },
   {
    "label": "Stanford: Programming Paradigms (27 videos)",
    "url": "https://www.youtube.com/playlist?list=PL9D558D49CA734A02"
   },
   {
    "label": "Introduction to Cryptography by Christof Paar",
    "url": "https://www.youtube.com/playlist?list=PL6N5qY2nvvJE8X75VkXglSrVhLv1tVcfy"
   },
   {
    "label": "Course Website along with Slides and Problem Sets",
    "url": "http://www.crypto-textbook.com/"
   },
   {
    "label": "Mining Massive Datasets - Stanford University (94 videos)",
    "url": "https://www.youtube.com/playlist?list=PLLssT5z_DsK9JDLcT8T62VtzwyW9LNepV"
   },
   {
    "label": "Graph Theory by Sarada Herke (67 videos)",
    "url": "https://www.youtube.com/user/DrSaradaHerke/playlists?shelf_id=5&view=50&sort=dd"
   },
   {
    "label": "Directory of Online CS Courses",
    "url": "https://github.com/open-source-society/computer-science"
   },
   {
    "label": "Directory of CS Courses (many with online lectures)",
    "url": "https://github.com/prakhar1989/awesome-courses"
   },
   {
    "label": "Multiple Algorithms implementation by Princeton University",
    "url": "https://algs4.cs.princeton.edu/code"
   },
   {
    "label": "Love classic papers?",
    "url": "https://www.cs.cmu.edu/~crary/819-f09/"
   },
   {
    "label": "1978: Communicating Sequential Processes",
    "url": "http://spinroot.com/courses/summer/Papers/hoare_1978.pdf"
   },
   {
    "label": "implemented in Go",
    "url": "https://godoc.org/github.com/thomas11/csp"
   },
   {
    "label": "2003: The Google File System",
    "url": "http://static.googleusercontent.com/media/research.google.com/en//archive/gfs-sosp2003.pdf"
   },
   {
    "label": "2004: MapReduce: Simplified Data Processing on Large Clusters",
    "url": "http://static.googleusercontent.com/media/research.google.com/en//archive/mapreduce-osdi04.pdf"
   },
   {
    "label": "2006: Bigtable: A Distributed Storage System for Structured Data",
    "url": "https://static.googleusercontent.com/media/research.google.com/en//archive/bigtable-osdi06.pdf"
   },
   {
    "label": "2006: The Chubby Lock Service for Loosely-Coupled Distributed Systems",
    "url": "https://research.google.com/archive/chubby-osdi06.pdf"
   },
   {
    "label": "2007: Dynamo: Amazon’s Highly Available Key-value Store",
    "url": "http://s3.amazonaws.com/AllThingsDistributed/sosp/amazon-dynamo-sosp2007.pdf"
   },
   {
    "label": "2007: What Every Programmer Should Know About Memory (very long, and the author encourages skipping of some sections)",
    "url": "https://www.akkadia.org/drepper/cpumemory.pdf"
   },
   {
    "label": "paper",
    "url": "http://static.googleusercontent.com/media/research.google.com/en//pubs/archive/37752.pdf"
   },
   {
    "label": "video",
    "url": "https://www.usenix.org/conference/atc12/technical-sessions/presentation/serebryany"
   },
   {
    "label": "paper",
    "url": "http://static.googleusercontent.com/media/research.google.com/en//archive/spanner-osdi2012.pdf"
   },
   {
    "label": "video",
    "url": "https://www.usenix.org/node/170855"
   },
   {
    "label": "2015: Continuous Pipelines at Google",
    "url": "http://static.googleusercontent.com/media/research.google.com/en//pubs/archive/43790.pdf"
   },
   {
    "label": "2015: High-Availability at Massive Scale: Building Google’s Data Infrastructure for Ads",
    "url": "https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/44686.pdf"
   },
   {
    "label": "2015: How Developers Search for Code: A Case Study",
    "url": "http://static.googleusercontent.com/media/research.google.com/en//pubs/archive/43835.pdf"
   },
   {
    "label": "1,000 papers",
    "url": "https://github.com/0voice/computer_expert_paper"
   }
  ],
  "depth": 1
 }
];
