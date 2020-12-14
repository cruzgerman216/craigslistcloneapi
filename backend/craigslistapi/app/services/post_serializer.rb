class PostSerializer
    def initialize(post_object)
        @post = post_object
    end

    def to_serialized_json
        @post.to_json(:except=>[:updated_at])
    end
end