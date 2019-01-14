/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    points = points.sort(function(a,b){
      return (Math.pow(a[0], 2) + Math.pow(a[1], 2))- (Math.pow(b[0], 2) + Math.pow(b[1], 2));
    });
    return points.slice(0, K);  
  };