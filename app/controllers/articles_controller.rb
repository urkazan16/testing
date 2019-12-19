class ArticlesController < ApplicationController

 # include Response
 # before_action :articles

  def index
    @articles = Article.all
  end

  def show
    @article = Article.find(params[:id])
  end

def edit
  @article = Article.find(params[:id])
end

  def say_hello
    fork { exec ('ruby ./app/models/testing.rb')}
    # fork { exec ('ruby ./test/Ruby_sel/runtest.rb')}
    render json: {"message": "hui"}

  end

  def new
      @article = Article.new
  end

def update
  @article = Article.find(params[:id])

  if @article.update(article_params)
    redirect_to @article
  else
    render 'edit'
  end
end

def destroy
  @article = Article.find(params[:id])
  @article.destroy

  redirect_to articles_path
end


def create
  @article = Article.new(article_params)

  if @article.save
    redirect_to @article
  else
    render 'new'
  end
end

# private

  def article_params
    params.require(:article).permit(:title, :text)
  end



end
