module.exports = {
  post: function(path, body, head) {
    
    body = body || JSON.stringify({});

    head = head || {
      "Content-Type": "application/json"
    };

    var gen = function*() {
      return fetch(path, {
        method: "POST",
        headers: head,
        credentials: "include",
        body: body
      });
    };

    var fetchPost = gen();
    var successStatus = fetchPost.next().value;
    var failedStatus = fetchPost.next().value;

    return {
      success:successStatus,
      err:failedStatus
    };

  }
};