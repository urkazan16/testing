class ArticlesController < ApplicationController



  def index
    @articles = Article.all
  end

  def show
    @article = Article.find(params[:id])
  end



  def say_hello
    fork { exec ('ruby ./app/models/testing.rb')}
    # fork { exec ('ruby ./test/Ruby_sel/runtest.rb')}
    render json: {"message": "hui"}

  end

  def new
  end



def create
  @article = Article.new(article_params)
  @article.save
  redirect_to @article
end

private
  def article_params
    params.require(:article).permit(:title, :text)
  end



end
