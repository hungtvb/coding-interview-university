// Built-in flashcard deck: core concepts from the CIU study plan topics
// (Big-O, data structures, trees, sorting, graphs, DP, system design).
// Keys are "builtin-<id>"; review state is stored server-side per key.

export interface BuiltinCard {
  id: number;
  topic: string;
  front: string;
  back: string;
}

export const BUILTIN_CARDS: BuiltinCard[] = [
  { id: 1, topic: "Big-O", front: "Big-O của tìm kiếm tuyến tính (linear search) trên mảng n phần tử?", back: "O(n) — trường hợp xấu nhất phải duyệt mọi phần tử. Trung bình cũng O(n)." },
  { id: 2, topic: "Big-O", front: "Binary search chạy trong thời gian bao lâu? Điều kiện tiên quyết?", back: "O(log n). Điều kiện: dữ liệu đã được sắp xếp (hoặc cấu trúc có thứ tự). Mỗi bước loại bỏ một nửa không gian tìm kiếm." },
  { id: 3, topic: "Big-O", front: "O(1), O(log n), O(n), O(n log n), O(n²), O(2ⁿ) — sắp xếp theo tốc độ tăng trưởng tăng dần?", back: "O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ). Đây chính là thứ tự đó." },
  { id: 4, topic: "Big-O", front: "Amortized analysis là gì? Ví dụ điển hình?", back: "Phân tích chi phí trung bình trên một chuỗi thao tác, kể cả khi một thao tác đơn lẻ đắt. Ví dụ: push vào dynamic array là O(1) khấu hao dù thỉnh thoảng phải resize O(n)." },
  { id: 5, topic: "Cấu trúc dữ liệu", front: "Dynamic array (vector): độ phức tạp của at(index), push cuối, insert giữa?", back: "at: O(1). push cuối: O(1) khấu hao. insert/delete ở giữa: O(n) vì phải dịch chuyển phần tử." },
  { id: 6, topic: "Cấu trúc dữ liệu", front: "Vì sao insert vào đầu linked list là O(1) nhưng truy cập phần tử thứ k là O(n)?", back: "Insert đầu chỉ cần đổi con trỏ head. Truy cập thứ k phải duyệt lần lượt từ head qua từng node — linked list không có random access." },
  { id: 7, topic: "Cấu trúc dữ liệu", front: "Stack vs Queue: khác nhau cốt lõi?", back: "Stack: LIFO (vào sau ra trước) — push/pop ở cùng một đầu. Queue: FIFO (vào trước ra trước) — enqueue ở đuôi, dequeue ở đầu." },
  { id: 8, topic: "Cấu trúc dữ liệu", front: "Hash table: get/insert/delete trung bình và xấu nhất?", back: "Trung bình O(1) khi hàm băm phân phối đều. Xấu nhất O(n) khi mọi key va chạm vào cùng một bucket." },
  { id: 9, topic: "Cấu trúc dữ liệu", front: "Hai cách xử lý va chạm (collision) trong hash table phổ biến?", back: "1) Chaining: mỗi bucket là một linked list. 2) Open addressing: dò ô trống tiếp theo (linear/quadratic probing, double hashing)." },
  { id: 10, topic: "Cấu trúc dữ liệu", front: "Load factor của hash table là gì, ảnh hưởng thế nào?", back: "α = số phần tử / số bucket. α càng cao càng nhiều va chạm, thao tác càng chậm. Thường resize (rehash) khi α vượt ~0.7." },
  { id: 11, topic: "Cây", front: "In-order traversal của BST cho ra thứ tự gì?", back: "Dãy đã sắp xếp tăng dần. In-order: trái → gốc → phải." },
  { id: 12, topic: "Cây", front: "BST cân bằng (AVL/Red-Black): search/insert/delete?", back: "Đều O(log n) vì chiều cao cây bị giới hạn ở O(log n). BST lệch (degenerate) có thể xuống O(n)." },
  { id: 13, topic: "Cây", front: "Heap (priority queue): peek, insert, extract-min/max?", back: "peek: O(1). insert: O(log n) (bubble up). extract: O(log n) (bubble down / heapify)." },
  { id: 14, topic: "Cây", front: "BFS và DFS dùng cấu trúc phụ trợ nào?", back: "BFS dùng Queue (đi theo tầng). DFS dùng Stack — hoặc đệ quy (ngăn xếp lời gọi hàm)." },
  { id: 15, topic: "Cây", front: "Trie (prefix tree) tìm một từ độ dài k mất bao lâu? Nó mạnh ở bài toán gì?", back: "O(k) — không phụ thuộc số từ đã lưu. Mạnh ở autocomplete / prefix search / kiểm tra tiền tố." },
  { id: 16, topic: "Sắp xếp", front: "QuickSort: trung bình, xấu nhất, và khi nào xấu nhất xảy ra?", back: "Trung bình O(n log n); xấu nhất O(n²) khi pivot luôn là phần tử nhỏ nhất/lớn nhất (ví dụ mảng đã sắp xếp + pivot cố định ở đầu)." },
  { id: 17, topic: "Sắp xếp", front: "MergeSort: độ phức tạp thời gian và bộ nhớ? Có stable không?", back: "Luôn O(n log n), bộ nhớ phụ O(n). Stable — giữ nguyên thứ tự tương đối của các phần tử bằng nhau." },
  { id: 18, topic: "Sắp xếp", front: "Vì sao không có thuật toán sắp xếp so sánh nào nhanh hơn O(n log n)?", back: "Cây quyết định cho n! hoán vị cần ít nhất log₂(n!) ≈ n log n lá, nên chiều cao (số phép so sánh xấu nhất) bị chặn dưới bởi Ω(n log n)." },
  { id: 19, topic: "Sắp xếp", front: "Counting sort / Radix sort đạt O(n) bằng cách nào?", back: "Không dựa trên so sánh — khai thác miền giá trị của key (đếm tần suất / theo từng chữ số). Đánh đổi: cần biết trước range của key." },
  { id: 20, topic: "Sắp xếp", front: "HeapSort: thời gian, bộ nhớ, tính stable?", back: "O(n log n) mọi trường hợp, bộ nhớ phụ O(1) (in-place), nhưng KHÔNG stable." },
  { id: 21, topic: "Đồ thị", front: "BFS trên đồ thị: độ phức tạp và ứng dụng kinh điển?", back: "O(V + E). Ứng dụng: đường đi ngắn nhất (theo số cạnh) trong đồ thị không trọng số." },
  { id: 22, topic: "Đồ thị", front: "Dijkstra: giải quyết bài toán gì, điều kiện, độ phức tạp với binary heap?", back: "Đường đi ngắn nhất từ một nguồn trong đồ thị trọng số KHÔNG âm. O((V + E) log V) với binary heap." },
  { id: 23, topic: "Đồ thị", front: "Khi nào dùng Bellman-Ford thay vì Dijkstra?", back: "Khi đồ thị có cạnh trọng số âm. Bellman-Ford O(V·E) và phát hiện được chu trình âm (negative cycle)." },
  { id: 24, topic: "Đồ thị", front: "Topological sort áp dụng khi nào? Thuật toán Kahn dùng cấu trúc gì?", back: "Chỉ cho DAG (đồ thị có hướng không chu trình) — xếp thứ tự phụ thuộc. Kahn: dùng hàng đợi các node có in-degree = 0." },
  { id: 25, topic: "Đồ thị", front: "Union-Find (DSU): find/union gần như O(1) nhờ hai tối ưu nào?", back: "Path compression (nén đường đi khi find) và union by rank/size (gắn cây thấp vào cây cao). Chi phí khấu hao α(n) ≈ hằng số." },
  { id: 26, topic: "Đồ thị", front: "Adjacency list vs adjacency matrix: đánh đổi?", back: "List: bộ nhớ O(V+E), duyệt kề nhanh — hợp đồ thị thưa. Matrix: bộ nhớ O(V²), kiểm tra cạnh (u,v) O(1) — hợp đồ thị dày." },
  { id: 27, topic: "Đệ quy & DP", front: "Ba thành phần cốt lõi của một bài Dynamic Programming?", back: "1) Bài toán con chồng lắp (overlapping subproblems). 2) Cấu trúc tối ưu con (optimal substructure). 3) Lưu kết quả (memoization top-down hoặc bảng bottom-up)." },
  { id: 28, topic: "Đệ quy & DP", front: "Memoization khác tabulation thế nào?", back: "Memoization: đệ quy top-down + cache theo nhu cầu. Tabulation: bottom-up, điền bảng theo thứ tự tăng dần, thường đỡ tốn stack và có thể tối ưu bộ nhớ." },
  { id: 29, topic: "Đệ quy & DP", front: "Master theorem giải quyết dạng truy hồi nào?", back: "T(n) = a·T(n/b) + f(n) — dạng chia-để-trị. So sánh f(n) với n^(log_b a) để kết luận một trong ba trường hợp." },
  { id: 30, topic: "Đệ quy & DP", front: "Knapsack 0/1: độ phức tạp theo n vật và sức chứa W?", back: "O(n·W) — giả đa thức (pseudo-polynomial) vì phụ thuộc giá trị W chứ không chỉ kích thước input theo bit." },
  { id: 31, topic: "Bit & Toán", front: "n & (n − 1) làm gì? Ứng dụng?", back: "Xóa bit 1 ở vị trí thấp nhất (rightmost set bit). Ứng dụng: đếm số bit 1 (popcount) trong O(số bit 1), kiểm tra lũy thừa của 2." },
  { id: 32, topic: "Bit & Toán", front: "Kiểm tra n có phải lũy thừa của 2 bằng một phép toán?", back: "n > 0 && (n & (n − 1)) === 0 — vì lũy thừa của 2 chỉ có đúng một bit 1." },
  { id: 33, topic: "Hệ điều hành", front: "Process vs Thread: khác nhau cốt lõi về bộ nhớ?", back: "Process có không gian địa chỉ riêng, cách ly nhau. Thread chia sẻ heap/code của process cha, chỉ có stack và register riêng — nhẹ hơn nhưng dễ race condition." },
  { id: 34, topic: "Hệ điều hành", front: "Race condition là gì? Ba công cụ đồng bộ kinh điển?", back: "Kết quả phụ thuộc thứ tự thực thi không kiểm soát của các thread. Công cụ: mutex/lock, semaphore, condition variable (và atomic operations)." },
  { id: 35, topic: "Hệ điều hành", front: "Bốn điều kiện cần để deadlock xảy ra (Coffman)?", back: "Mutual exclusion, Hold and wait, No preemption, Circular wait. Phá vỡ bất kỳ điều kiện nào cũng ngăn được deadlock." },
  { id: 36, topic: "Mạng", front: "TCP khác UDP ở những điểm nào quyết định chọn lựa?", back: "TCP: tin cậy, có thứ tự, có kiểm soát tắc nghẽn (web, file, API). UDP: không đảm bảo, độ trễ thấp (streaming, game, DNS)." },
  { id: 37, topic: "Mạng", front: "Điều gì xảy ra khi gõ một URL vào trình duyệt? (bản rút gọn)", back: "DNS phân giải tên miền → mở kết nối TCP (+ TLS handshake nếu HTTPS) → gửi HTTP request → server xử lý → trả response → trình duyệt parse & render." },
  { id: 38, topic: "System Design", front: "Load balancer lớp 4 (L4) khác lớp 7 (L7) thế nào?", back: "L4: định tuyến theo IP/port (TCP/UDP), không hiểu nội dung. L7: hiểu HTTP — định tuyến theo path/header/cookie, làm được A/B test, rate limit theo API." },
  { id: 39, topic: "System Design", front: "Cache-aside (lazy loading) hoạt động ra sao? Nhược điểm?", back: "App đọc cache trước; miss thì đọc DB rồi ghi vào cache. Nhược: request đầu luôn miss, dữ liệu có thể stale nếu DB đổi mà cache không được xóa/cập nhật." },
  { id: 40, topic: "System Design", front: "Sharding giải quyết vấn đề gì và đánh đổi điều gì?", back: "Chia dữ liệu ra nhiều DB theo shard key để scale ghi/dung lượng. Đánh đổi: join xuyên shard khó, resharding đau, cần chọn shard key tránh hotspot." },
  { id: 41, topic: "System Design", front: "CAP theorem phát biểu gì?", back: "Khi mạng bị phân mảnh (Partition), hệ phân tán chỉ chọn được một trong hai: nhất quán (Consistency) hoặc sẵn sàng (Availability). Không có partition thì có cả hai." },
  { id: 42, topic: "System Design", front: "Message queue (Kafka/RabbitMQ) giúp hệ thống ở điểm nào?", back: "Tách rời (decouple) producer–consumer, hấp thụ đỉnh tải (buffer), retry khi consumer chết, và cho phép xử lý bất đồng bộ / scale consumer độc lập." },
];
